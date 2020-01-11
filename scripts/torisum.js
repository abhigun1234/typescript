"use strict";
var Trevler = /** @class */ (function () {
    //constructor
    function Trevler(__name, __age) {
        this.age = __age;
        this.name = __name;
    }
    //getter
    Trevler.prototype.getName = function () {
        return this.name;
    };
    Trevler.prototype.setName = function (_name) {
        this.name = _name;
    };
    return Trevler;
}());
//obj of the class
var t1 = new Trevler("ravi", '35');
console.log("trevler name", t1.name);
console.log('treveler age', t1.age);
t1.setName("abhishek");
var name1 = t1.getName();
console.log("treveler name is", name1);
//# sourceMappingURL=torisum.js.map