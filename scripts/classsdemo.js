"use strict";
var pen = /** @class */ (function () {
    function pen(color) {
        this.color = color;
        alert("constructor");
    }
    pen.prototype.write = function () {
        alert("writting");
    };
    pen.prototype.getPenName = function () {
    };
    pen.prototype.setPenName = function (_name) {
        this.name = _name;
    };
    pen.prototype.getName = function () {
        return this.name;
    };
    return pen;
}());
var p1 = new pen('red');
p1.write();
p1.setPenName('camel');
var name1 = p1.getName();
alert(name1);
//# sourceMappingURL=classsdemo.js.map