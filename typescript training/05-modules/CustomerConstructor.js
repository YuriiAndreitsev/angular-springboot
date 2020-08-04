"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerConstructor = void 0;
var CustomerConstructor = /** @class */ (function () {
    function CustomerConstructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerConstructor.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (first) {
            this._firstName = first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerConstructor.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (last) {
            this._lastName = last;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerConstructor;
}());
exports.CustomerConstructor = CustomerConstructor;
