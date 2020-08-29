"use strict";
var Emp = /** @class */ (function () {
    function Emp(_id) {
        this.id = _id;
    }
    Emp.prototype.getId = function () {
        return this.id;
    };
    return Emp;
}());
var empid = '';
empid = prompt("enter id");
var e2 = new Emp(empid);
console.log(e2.getId());
//# sourceMappingURL=emp.js.map