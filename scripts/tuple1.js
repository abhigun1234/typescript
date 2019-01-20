"use strict";
var productinfo = /** @class */ (function () {
    function productinfo() {
    }
    productinfo.prototype.setproductData = function (a, b, c) {
        this.myproduct.push(a);
        this.myproduct.push(b);
        this.myproduct.push(c);
    };
    productinfo.prototype.getProductData = function () {
        return this.myproduct;
    };
    return productinfo;
}());
var p1 = new productinfo();
p1.setproductData("nike", 4455, "nike shoes");
var data = p1.getProductData();
console.log(data);
alert(data);
//# sourceMappingURL=tuple1.js.map