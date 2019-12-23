function SimpleEventEmitter() {
    this._eventList = {};
}

(function() {
    this.emit = function(eventName) {
        var events = this._eventList,
            args = Array.prototype.slice.call(arguments, 1);

        if (events.hasOwnProperty(eventName)) {
            events[eventName].forEach(function(handler) {
                if (typeof handler === 'function') {
                    return handler.apply(null, args);
                }
                handler.handler.apply(null, args);
            });
        }
    };


    this.on = function(eventName, handler) {
        var events = this._eventList;
        if (!events.hasOwnProperty(eventName)) {
            events[eventName] = [];
        }
        events[eventName].push(handler);
    };


    this.once = function(eventName, handler) {
        var container = {
            original: handler,
            handler: this._onceWrapper(eventName, handler)
        }
        this.on(eventName, container);
    }


    this.off = function(eventName, handler) {
        var events = this._eventList;
        if (events.hasOwnProperty(eventName)) {
            events[eventName] = events[eventName].filter(function(elem) {
                if (typeof elem === 'function') {
                    return elem !== handler;
                }
                return elem.original !== handler;
            });
        }
    };


    this._onceWrapper = function(eventName, handler) {
        var self = this;
        return function() {
            handler.apply(this, arguments);
            self.off(eventName, handler);
        }
    };
}).call(SimpleEventEmitter.prototype);