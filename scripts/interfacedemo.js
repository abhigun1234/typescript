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
var emp1 = new Employee();
emp1.hello();
emp1.bye();
//# sourceMappingURL=interfacedemo.js.map