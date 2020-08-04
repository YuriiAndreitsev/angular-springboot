var AnotherCustomer = /** @class */ (function () {
    function AnotherCustomer() {
    }
    Object.defineProperty(AnotherCustomer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (first) {
            this._firstName = first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnotherCustomer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (last) {
            this._lastName = last;
        },
        enumerable: false,
        configurable: true
    });
    return AnotherCustomer;
}());
var anotherCustomer = new AnotherCustomer();
anotherCustomer.firstName = "John";
anotherCustomer.lastName = "Connor";
console.log(" " + anotherCustomer.firstName + " " + anotherCustomer.lastName);
console.log("Customer is " + anotherCustomer.firstName + " " + anotherCustomer.lastName);
