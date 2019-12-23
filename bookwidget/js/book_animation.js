;(function(window) {
    
    'use strict';

    function BookAnimation(options) {
        this._options = this.parseOption(options);
        this._animationId = null;
    }

    BookAnimation.prototype = {
        start: function() {
            if (this._animationId) return;

            var self = this,
                duration = this._options.duration,
                timing = this._options.timing,
                draw = this._options.draw;

            if (duration === 0) {
                draw(1);
                this._finalize(false);
                return;
            }

            var start = performance.now();

            this._animationId = requestAnimationFrame(function animate(time) {
                var timeFraction = (time - start) / duration;
                if (timeFraction > 1) {
                    timeFraction = 1;
                }
                var progress = timing(timeFraction);
                draw(progress);
                if (timeFraction < 1 && progress < 1) {
                    self._animationId = requestAnimationFrame(animate);
                }
                else {
                    self._finalize(false)
                }
            });
        },


        parseOption: function(options) {
            var duration = options.duration,
                timing = options.timing;

            return Object.assign({}, options, {
                draw: options.draw,
                duration: duration === undefined ? 0 : duration,
                timing: typeof timing === 'function' ? timing : BookAnimation.prototype.timingList[timing],
            });

        },

        _finalize: function(interrupted) {
            this._animationId = null;
            if (this._options.callback) {
                this._options.callback(interrupted);
            }
        },

        isAnimating: function() {
            return !!this._animationId;
        },

        setOptions: function(options) {
            Object.assign(this._options, options);
        },

        getOptions: function() {
            return this._options;
        },

        cancel: function() {
            if (this._animationId === null) {
                return;
            }
            cancelAnimationFrame(this._animationId);
            this._finalize(true);
        },


        timingList: {
            'linear': function(timeFraction) {
                return timeFraction;
            },
            'quad': function(timeFraction) {
                return Math.pow(timeFraction, 2);
            },
            'circ': function(timeFraction) {
                return 1 - Math.sin(Math.acos(timeFraction));
            },
            'bounce': function( timeFraction ) {
                for (var a = 0, b = 1; 1; a += b, b /= 2) {
                    if (timeFraction >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
                    }
                }
            }
        },
        easingList: {
            'ease-in': function(timing) {
                return timing;
            },
            'ease-out': function(timing) {
                return function(timeFraction) {
                    return 1 - timing(1 - timeFraction);
                };
            },
            'ease-in-out': function(timing) {
                return function(timeFraction) {
                    if (timeFraction < .5)
                        return timing(2 * timeFraction) / 2;
                    else
                        return (2 - timing(2 * ( 1 - timeFraction))) / 2;
                }
            }
        }
    };

    window.BookAnimation = BookAnimation;

} (window));