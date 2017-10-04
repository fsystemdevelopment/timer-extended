"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer(callback, ms, args) {
        var _this = this;
        this.callback = callback;
        this.ms = ms;
        this.args = args;
        this.hasBeenCleared = false;
        this._returnValue = undefined;
        this.startTime = Date.now();
        this.timer = setTimeout(function () { return _this._returnValue = [callback.apply(null, args)]; }, ms);
    }
    Object.defineProperty(Timer.prototype, "remindingMs", {
        get: function () {
            return this.ms - (Date.now() - this.startTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "hasExec", {
        get: function () {
            return !(this._returnValue === undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "returnValue", {
        get: function () {
            if (!this._returnValue)
                return undefined;
            else
                return this._returnValue[0];
        },
        enumerable: true,
        configurable: true
    });
    Timer.prototype.runNow = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.hasExec)
            throw new Error("Timer has exec already");
        if (this.hasBeenCleared)
            throw new Error("Timer has been cleared");
        this.clear();
        this._returnValue = [this.callback.apply(null, (args.length) ? args : this.args)];
        return this._returnValue[0];
    };
    Timer.prototype.clear = function () {
        if (this.hasExec)
            return;
        this.hasBeenCleared = true;
        clearTimeout(this.timer);
    };
    Timer.prototype.resetDelay = function () {
        var _this = this;
        if (this.hasExec)
            throw new Error("Timer has exec already");
        if (this.hasBeenCleared)
            throw new Error("Timer has been cleared");
        clearTimeout(this.timer);
        this.startTime = Date.now();
        this.timer = setTimeout(function () { return _this._returnValue = [_this.callback.apply(null, _this.args)]; }, this.ms);
    };
    return Timer;
}());
exports.Timer = Timer;
function setTimer(callback, ms) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return new Timer(callback, ms, args);
}
exports.setTimer = setTimer;
