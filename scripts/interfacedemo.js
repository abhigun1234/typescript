"use strict";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.hello = function () {
        console.log("hello");
    };
    Employee.prototype.bye = function () {
        console.log("bye");
    };
    return Employee;
}());
var cust = /** @class */ (function () {
    function cust() {
    }
    cust.prototype.hello = function () {
        console.log("customer hello");
    };
    cust.prototype.bye = function () {
        console.log("customer bye");
    };
    return cust;
}());
var emp1 = new Employee();
emp1.hello();
emp1.bye();
var cust1 = new cust();
cust1.bye();
//# sourceMappingURL=interfacedemo.js.map