"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.getPersionInfo = function () {
        console.log("personal info");
    };
    return person;
}());
var Xyz = /** @class */ (function (_super) {
    __extends(Xyz, _super);
    function Xyz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xyz;
}(person));
var xyz = new Xyz();
xyz.getPersionInfo();
//# sourceMappingURL=inheritencedemo.js.map