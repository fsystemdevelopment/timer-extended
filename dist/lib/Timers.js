"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timer_1 = require("./Timer");
var Timers = /** @class */ (function () {
    function Timers() {
        var _this = this;
        this._values = new Set();
        this.add = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var timer = Timer_1.setTimer.apply(null, inputs);
            _this.values.add(timer);
            return timer;
        };
    }
    Timers.prototype.garbageCollector = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this._values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timer = _c.value;
                if (timer.hasExec || timer.hasBeenCleared) {
                    this._values.delete(timer);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Object.defineProperty(Timers.prototype, "values", {
        get: function () {
            this.garbageCollector();
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Timers.prototype.clearAll = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timer = _c.value;
                timer.clear();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Timers;
}());
exports.Timers = Timers;
