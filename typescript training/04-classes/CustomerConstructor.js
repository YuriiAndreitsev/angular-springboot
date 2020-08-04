var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
var myCustomer = new Customer("Rob", "Schneider");
// myCustomer.firstName = "Robby";
// myCustomer.lastName = "Schneider";
console.log(myCustomer);
