;(function(window) {

    'use strict';

    var document = window.document;

    function Page(options) {

        var page = this._createPage();

        this.el = page.elem;

        this._frontSide = page.frontSide.elem;
        this._frontSelfShadow = page.frontSide.selfShadow;
        this._frontCastShadow = page.frontSide.castShadow;

        this._backSide = page.backSide.elem;
        this._backSelfShadow = page.backSide.selfShadow;
        this._backCastShadow = page.backSide.castShadow;

        this._emitter = new SimpleEventEmitter();

        this._animation = null;

        // define zIndex property
        Object.defineProperty(this, 'zIndex', {
            get: function() {
                return getComputedStyle(this.el).getPropertyValue('z-index');
            },
            set: function(value) {
                this.el.style.zIndex = value;
            }
        });

        if (options && options.frontSrc && typeof options.frontSrc === 'string') {
            this.setImage('front', options.frontSrc);
        }
        if (options && options.backSrc && typeof options.backSrc === 'string') {
            this.setImage('back', options.frontSrc);
        }
    }

    Page.prototype = {

        // ========================== CREATE PAGE ==========================
        _createPage: function() {

            // create page container
            var page = document.createElement('DIV');
            page.className = 'b-page';

            // Create the front side of the page
            var frontSide = this._createSide('front');
            page.appendChild(frontSide.elem);

            // create the back side of the page
            var backSide = this._createSide('back');
            page.appendChild(backSide.elem);

            return {
                elem: page,
                frontSide: frontSide,
                backSide: backSide
            };
        },


        // ========================== CREATE THE SIDE OF THE PAGE ==========================
        _createSide: function(side) {

            if (side !== 'front' && side !== 'back') {
                return false;
            }

            var sideElem = document.createElement('DIV');
            sideElem.className = 'b-page__side b-page__side_' + side;

            var preloader = new Image();
            preloader.className = 'b-page__preloader';
            preloader.src = 'preloader.svg';
            sideElem.appendChild(preloader);

            var overlayShadow = document.createElement('DIV');
            overlayShadow.className = 'b-page__overlay b-page__overlay_shadow';
            sideElem.appendChild(overlayShadow);

            var overlayCastShadow = document.createElement('DIV');
            overlayCastShadow.className = 'b-page__overlay b-page__overlay_cast-shadow';
            sideElem.appendChild(overlayCastShadow);

            return {
                elem: sideElem,
                selfShadow: overlayShadow,
                castShadow: overlayCastShadow
            };
        },


        // ========================== SET SIDE ==========================
        setImage: function(side, src) {
            if (side !== 'front' && side !== 'back') {
                return false;
            }

            var img = document.createElement('img');
            img.className = 'b-page__img b-page__img_' + side;
            img.src = src;

            this['_' + side + 'ImgWidth'] = this['_' + side + 'ImgHeight'] = 0;

            var self = this,
                sideElem = this['_' + side + 'Side'];

            img.onload = function() {
                var width = img.width, height = img.height;
                self['_' + side + 'ImgWidth'] = width;
                self['_' + side + 'ImgHeight'] = height;
                self._emitter.emit(side + 'imgload', {
                    height: height,
                    width: width,
                });
                var preloader = sideElem.querySelector('.b-page__preloader');
                if (preloader) {
                    sideElem.removeChild(preloader);
                }
                sideElem.insertBefore(img, sideElem.firstChild);
            };

            //get an old image if it exists and remove it
            var oldImg = sideElem.querySelector('.b-page__img');
            if (oldImg) {
                sideElem.removeChild(oldImg);
                var newPreloadr = document.createElement('DIV');
                newPreloadr.className = 'b-page__preloader';
                sideElem.insertBefore(img, sideElem.firstChild);
            }   

            this[side + 'Image'] = src;
        },


        // ========================== ROTATE PAGE ==========================
        rotate: function(angle, shadow) {
            if (angle < 0 || angle > 180) {
                return false;
            }
            this.el.style.transform = 'rotateY(' + -angle + 'deg)';

            this._setSelfShadow(angle, shadow);
        },
        

        _setSelfShadow: function(angle, opacity) {
            if (!opacity) {
                this._frontSelfShadow.style.opacity = '';
                this._backSelfShadow.style.opacity = '';
                return;
            }
            if (angle < 90) {
                this._frontSelfShadow.style.opacity = opacity * angle / 90;
                this._backSelfShadow.style.opacity = opacity;
            }
            else {
                this._frontSelfShadow.style.opacity = opacity;
                this._backSelfShadow.style.opacity = opacity * (180 - angle) / 90;
            }
        },

        
        setCastShadow: function(side, value) {
            this['_' + side + 'CastShadow'].style.opacity = value;
        },


        // ========================== ADD CLASS ==========================
        addClass: function(name) {
            this.el.classList.add(name);
        },


        // ========================== REMOVE CLASS ==========================
        removeClass: function(name) {
            this.el.classList.remove(name);
        },


        // ========================== GET CURRENT ANGLE ==========================
        getCurrentAngle: function() {
            var trans = getComputedStyle(this.el, null).getPropertyValue('transform'),
                match = trans.match(/-?[01][\.\d]*/);

            if (!match) return 0;

            var cos = match[0];
            var angle = Math.round(Math.acos(cos) * (180 / Math.PI));

            return Math.abs(angle);
        },


        getImgSize: function(side, callback) {
            if (side !== 'front' && side !== 'back') return;

            var height = this['_' + side + 'ImgHeight'],
                width = this['_' + side + 'ImgWidth'];

            if (!height || !width) {
                this._emitter.once(side + 'imgload', function(size) {
                    callback(size);
                });
            } else {
                callback({
                    height: height,
                    width: width,
                });
            }
        },
    };

    window.Page = Page;

} (window));