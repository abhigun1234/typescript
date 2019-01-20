"use strict";
var emp = /** @class */ (function () {
    function emp(_sal, _name) {
        this.sal = _sal;
        this.name = _name;
    }
    emp.prototype.getSalary = function () {
        return this.sal;
    };
    emp.prototype.setSalary = function (sal) {
        this.sal = sal;
    };
    return emp;
}());
// object of the class
var e1 = new emp(4000, "raj");
e1.setSalary(5000);
var salary = e1.getSalary();
console.log(e1.sal);
console.log(e1.name);
console.log(salary);
//# sourceMappingURL=classdemo.js.map