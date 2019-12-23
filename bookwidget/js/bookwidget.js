;(function() {
    'use strict';

    function BookWidget(el, options) {
        var bookElem = el.querySelector('.b-book');

        this.el = el;
        this._nextBtn = el.querySelector('.book-widget__arrow_next');
        this._prevBtn = el.querySelector('.book-widget__arrow_prev');
        this._pagination = el.querySelector('.b-pagination__list');
        this._book = new Book(bookElem, options);
        this.options = Object.assign({}, options);
    }

    BookWidget.prototype = {
        init: function(srcArr) {
            this._book.init(srcArr);

            var item,
                len = this._book.lastPage,
                pagination = this._pagination;

            for (var i = 0; i <= len; ++i) {
                item = document.createElement('div');
                item.className = 'b-pagination__page';
                item.textContent = i + 1;
                pagination.appendChild(item);
            }

            pagination.firstElementChild.classList.add('b-pagination__page_selected');

            this._initEvents();
        },

        // _clearEl: function() {
        //     var child,
        //         elem = this._book.el;

        //     while (child = elem.firstElementChild) {
        //         elem.removeChild(child);
        //     }
        // },


        _initEvents: function() {
            var self = this,
                book = this._book,
                pagination = this._pagination,
                nextBtn = this._nextBtn,
                prevBtn = this._prevBtn,
                next = book.next.bind(book),
                prev = book.prev.bind(book),
                liftRight = book.lift.bind(book, 'right'),
                liftLeft = book.lift.bind(book, 'left'),
                dropRight = book.drop.bind(book, 'right'),
                dropLeft = book.drop.bind(book, 'left');

                // select.addEventListener('change', function(event) {
                //     book.jumpTo(+select.value);
                // });


            window.addEventListener('resize', function(event) {
                self._resizeHandler();
            });

            book.on('pagechange', function(currentPage, previousPage) {
                self._adjustNavigation(currentPage, previousPage);
            });

            nextBtn.addEventListener('touchstart', next);
            nextBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
            });
            prevBtn.addEventListener('touchstart', prev);
            prevBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
            });

            nextBtn.addEventListener('click', next);
            prevBtn.addEventListener('click', prev);

            nextBtn.addEventListener('mouseover', liftRight);
            prevBtn.addEventListener( 'mouseover', liftLeft);

            nextBtn.addEventListener( 'mouseout', dropRight);
            prevBtn.addEventListener( 'mouseout', dropLeft);


            pagination.addEventListener('click', function(event) {
                var pageNum = +event.target.textContent - 1;
                book.jump(pageNum);
            })
        },

        _adjustNavigation: function(curr, prev) {
            var pagination = this._pagination,
                first = this._book.firstPage,
                last = this._book.lastPage;

            if (curr === first) {
                this._prevBtn.classList.add('book-widget__arrow_disabled');
            } else if (curr === last) {
                this._nextBtn.classList.add('book-widget__arrow_disabled');
            }

            if (prev === first) {
                this._prevBtn.classList.remove('book-widget__arrow_disabled');
            } else if (prev === last) {
                this._nextBtn.classList.remove('book-widget__arrow_disabled');
            }

            pagination.children[prev].classList.remove('b-pagination__page_selected');
            pagination.children[curr].classList.add('b-pagination__page_selected');

            if (curr >= 2 && curr <= (last - 2)) {
                pagination.style.marginLeft = -36 * (curr - 2) + 'px';
            }
        },


        _resizeHandler: function(event) {
            var self = this;
            function delayed() {
                self._book.resize();
                self._resizeTimeout = null;
            }
            if (this._resizeTimeout) {
                clearTimeout(this._resizeTimeout);
            }
            this._resizeTimeout = setTimeout(delayed, 66);
        },

    };


    window.BookWidget = BookWidget;
}());