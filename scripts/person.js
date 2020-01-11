"use strict";
var Person = /** @class */ (function () {
    function Person(_name, _email) {
        this.name = _name;
        this.email = _email;
    }
    //  }
    Person.prototype.hello = function () {
        console.log("hello", this.name);
        console.log("hello", this.email);
    };
    return Person;
}());
var p = new Person("abhishek", "email@abc");
p.hello();
//# sourceMappingURL=person.js.map