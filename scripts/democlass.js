"use strict";
var Student = /** @class */ (function () {
    function Student(_name, _address) {
        this.name = '';
        this.address = '';
        this.email = '';
        this.name = _name;
        this.address = _address;
    }
    //https://github.com/abhigun1234/typescript.git
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    Student.prototype.setName = function (_name) {
        this.name = _name;
    };
    Student.prototype.setAddress = function (_address) {
        this.address = _address;
    };
    return Student;
}());
//taking data from user 
// create object
var st1 = new Student("Laxmi", "pimple");
// st1.address='hinjewadi'
// st1.email='abc@gmail.com'
// st1.name='abhi'
// st1.setName("abhishek")
// st1.setAddress("pimple saudagar")
var data = st1.getName();
console.log("data", data);
var data1 = st1.getAddress();
console.log("data", data1);
//# sourceMappingURL=democlass.js.map