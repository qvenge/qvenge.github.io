;(function(window) {

    'use strict';

    var document = window.document;

    function Book(element, options) {
        SimpleEventEmitter.call(this);

        this.el = element;
        this.pageList = [];
    
        this._firstPage = 0;
        this._currentPage = 0;
        this.numberOfPages = 0;

        this._plannedShift = 0;

        // the value of this property depends on the number of pages
        this._zIndex = 0;

        this.options = Object.assign({}, this._default, options);

        this._systemOptions = {};

        Object.defineProperties(this, {
            'firstPage': {
                get: function() { return this._firstPage; }
            },
            'lastPage': { 
                get: function() { return this.pageList.length; } 
            },
            'currentPage': {
                get: function() { return this._currentPage; }
            }
        });
    }

    Book.prototype = Object.create(SimpleEventEmitter.prototype);

    (function() {

        this._default = {
            turnTiming: 'quad',
            turnEasing: 'ease-in-out',
            turnDuration: 500,
            liftDropTiming: 'quad',
            liftDropEasing: '',
            liftDropDuration: 500,
            selfShadow: 0.3,
            castShadow: 0.4,
            bookWidth: '86%',
            liftAngle: 20,

            preloaderSrc: 'preloader.svg',
        };


        this.init = function(srcs) {
            var self = this;
            this._zIndex = srcs.length + 2;

            var container = document.createElement('div');
            container.className = 'b-book__container';
            this.el.appendChild(container);
            this._pageContainer = container;

            srcs.forEach(function(src) {
                self._addPage(container, src);
            });

            this._setSystemOptions();

            this.pageList[this.firstPage].getImgSize('front', function(size) {
                self._systemOptions.bookHeightFactor = (size.height / size.width) * 0.5;
                self.resize();
            });
        };


        this._addPage = function(elem, pageSrc) {
            var page;
            if (!(this.numberOfPages % 2)) {
                page = this._createPage(this._zIndex - this.pageList.length);
                this.pageList.push(page);
                page.setImage('front', pageSrc);
            }
            else {
                page = this.pageList[this.pageList.length - 1];
                page.setImage('back', pageSrc);
            }
            elem.appendChild(page.el);
            ++this.numberOfPages;
        };


        this._createPage = function(zIndex) {
            var page = new Page();
            page.addClass('b-book__page');
            page.zIndex = zIndex;
            return page;
        };


        this._setSystemOptions = function() {
            var bookWidth = this.options.bookWidth;
            if (/%/.test(bookWidth)) {
                var percent = bookWidth.match(/\d+/)[0];
                this._systemOptions.bookWidthFactor = percent / 100;
            }
            else if (/px/.test(bookWidth)) {
                this._systemOptions.bookWidth = bookWidth.match(/\d+/)[0];
            }
            else {
                throw Error('Invalid format specified for "bookWidth" option.');
            }
        };

        this.resize = function() {
            var bookWidth = Math.floor(this.el.parentElement.clientWidth * this._systemOptions.bookWidthFactor),
                bookHeight = Math.floor(bookWidth * this._systemOptions.bookHeightFactor);

            this.el.style.width = bookWidth + 'px';
            this.el.style.height = bookHeight + 'px';

            var style = document.getElementById('pageStyle');
            style.sheet.cssRules[0].style.width = bookWidth / 2 + 'px';
        };


        this.jump = function(pageNumber) {
            if (typeof pageNumber !== 'number') {
                return;
            }
            this._shift(pageNumber - this.currentPage - this._plannedShift);
        };


        this.next = function() {
            if (this.currentPage >= this.pageList.length) {
                return false;
            }
            this._shift(1);
        };


        this.prev = function() {
            if (this.currentPage <= 0) {
                return false;
            }
            this._shift(-1);
        };


        this.lift = function(dir) {
            if ((dir !== 'left' && dir !== 'right') || this[dir + 'LiftTimer']) {
                return;
            }
            var self = this,
                addendum = dir === 'right' ? 0 : -1;

            this[dir + 'LiftTimer'] = setTimeout(function lifter(addendum) {
                self._liftORdrop('lift', addendum);
                self[dir + 'LiftTimer'] = setTimeout(lifter, 100, addendum);
            }, 0, addendum);
        };


        this.drop = function(dir) {
            if ((dir !== 'left' && dir !== 'right') || !this[dir + 'LiftTimer']) {
                return;
            }
            var addendum = dir === 'right' ? 0 : -1;
            clearTimeout(this[dir + 'LiftTimer']);
            this[dir + 'LiftTimer'] = null;
            this._liftORdrop('drop', addendum);
        };


        this._liftORdrop = function(command, addendum) {                      // addendum = { -1 || 0 }
            var page = this.pageList[this.currentPage + addendum];
                
            if (page === undefined || page.state === 'turning') {
                return;
            }

            var targetAngle,
                startAngle = page.getCurrentAngle();

            if (command === 'lift') {
                if (page.state === 'lifting') return;
                var liftAngle = this.options.liftAngle;
                targetAngle = startAngle < 90 ? liftAngle : 180 - liftAngle;
            } else if (command === 'drop') {
                if (page.state === 'dropping') return;
                targetAngle = startAngle < 90 ? 0 : 180;
            } else {
                return;
            }

            var animationOptions = this._getLiftDropAnimationOptions(page, startAngle, targetAngle);
            this._launch(command, { page: page, animationOptions: animationOptions });
        };


        this._shift = function(value, callback) {
            var targetPageNumber = this.currentPage + this._plannedShift + value
            if (targetPageNumber < this.firstPage || targetPageNumber > this.lastPage) {
                return;
            }

            if (!this._plannedShift) {
                var page,
                    self = this,
                    addendum = value < 0 ? 0 : -1;

                this._liftORdrop('drop', addendum);

                setTimeout(function walker() {
                    if (!self._plannedShift) {
                        return;
                    }
                    if (self._plannedShift < 0) {
                        page = self.pageList[self.currentPage - 1];
                        ++self._plannedShift;
                    }
                    else {
                        page = self.pageList[self.currentPage];
                        --self._plannedShift;
                    }
                    self._turnPage({ page: page, callback: callback });
                    if (self._plannedShift) setTimeout(walker, self._turningDelay);
                }, 0);
            }
            this._plannedShift += value;
            this._turningDelay = this.options.turnDuration / Math.abs(this._plannedShift);
        };


        //изменить dir 0 1
        this._turnPage = function(details) {
            var page = details.page,
                startAngle = page.getCurrentAngle(),
                targetAngle = startAngle < 90 ? 180 : 0;

            if (page.action && page.action.dir) {
                targetAngle = page.action.dir > 0 ? 0 : 180;
            }

            var dir = targetAngle === 180 ? 1 : -1,
                pageNumber = this.currentPage + dir,
                zIndexAfetr = dir > 0 ? pageNumber : this._zIndex - pageNumber;

            if (details.noAnimation) {
                page.rotate(targetAngle);
                page.zIndex = details.zIndexAfetr;
            }
            else {
                var extended = Object.assign({}, details);
                extended.dir = dir;
                extended.animationOptions = this._getTurnAnimationOptions(page, startAngle, targetAngle, zIndexAfetr);
                this._launch('turn', extended);
            }

            this._setCurrentPage(pageNumber);
        };

        this._getLiftDropAnimationOptions = function(page, startAngle, targetAngle) {
            var selfShadow = this.options.selfShadow,
                span = targetAngle - startAngle;

            function draw(progress) {
                var shift = progress * span,
                    angle = startAngle + shift;

                this.rotate(angle, selfShadow);
            };

            return {
                duration: this.options.liftDropDuration * (Math.abs(span) / this.options.liftAngle),
                timing: this.options.liftDropTiming,
                draw: draw.bind(page),
            };
        };


        this._getTurnAnimationOptions = function(page, startAngle, targetAngle, zIndexAfter) {
            var selfShadow = this.options.selfShadow,
                span = targetAngle - startAngle,
                once = true,
                from90 = Math.abs(90 - startAngle);

            function draw(progress) {
                var shift = progress * span,
                    angle = startAngle + shift;

                if (zIndexAfter && once && Math.abs(shift) > from90) {
                    once = false;
                    this.zIndex = zIndexAfter;
                }
                this.rotate(angle, selfShadow);
            };

            return {
                duration: this.options.turnDuration * (Math.abs(span) / 180),
                timing: this.options.turnTiming,
                draw: draw.bind(page),
            };
        };


        // this method as "central dispatch" that performs any action
        // this is the only method that is permitted to invoke the animation method
        // it makes sure that any animation conflict won't occur
        // available commands: "turn", "jump", "lift-drop",
        this._launch = function(actionName, details) {
            var page = details.page,
                action = page.action;

            if (action) {
                action.animation.cancel();
            }

            action = page.action = {};

            page.state = actionName === 'turn' ? 'turning'
                : actionName === 'lift' ? 'lifting'
                : actionName === 'drop' ? 'dropping'
                : undefined;

            action.dir = details.dir;

            var options = Object.assign({}, details.animationOptions),
                callback = details.callback;
            
            options.callback = function(interrupted) {
                if (callback) {
                    callback(interrupted);
                }
                page.state = null;
                page.action = null;
            }

            var animation = new BookAnimation(options);
            animation.start();

            action.animation = animation;
        };


        this._generateId = function () {
            return '_' + Math.random().toString(36).substr(2, 9);
        };


        this._setCurrentPage = function(pageNumber) {
            var previousPage = this.currentPage;
            this._currentPage = pageNumber;
            this.emit('pagechange', pageNumber, previousPage);
            this._alignBook(pageNumber, previousPage);
        };


        this._alignBook = function(next, prev) {
            var firstPage = this.firstPage,
                lastPage = this.lastPage;

            if (next === firstPage) {
                this._setTransform(this._pageContainer, '');
            } else if (next === lastPage) {
                this._setTransform(this._pageContainer, 'translateX(50%)');
            } else if (prev === firstPage || prev === lastPage) {
                this._setTransform(this._pageContainer, 'translateX(0)');
            }
        };


        this._setTransform = function(element, value) {
            element.style.webkitTransform = value;
            element.style.MozTransform = value;
            element.style.msTransform = value;
            element.style.OTransform = value;
            element.style.transform = value;
        };
    }).call(Book.prototype);

    window.Book = Book;

} (window));