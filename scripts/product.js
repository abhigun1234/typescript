"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    //constructor
    function Product() {
        // this.id=id;
        // this.name=_name;
        // this.price=price;
        // this.description=description;
        // this.discount=discount;
        this.id = '1';
        this.name = 'addidas';
        this.price = '2000';
        this.description = 'shoes';
        this.discount = '20%';
    }
    //getter setter
    Product.prototype.hello = function () {
        console.log("hello");
    };
    return Product;
}());
var product1 = new Product();
console.log(product1.id);
//console.log(product1.name)
// product1.name='bnhh'
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = '2';
        _this.name = 'ravi';
        return _this;
    }
    Customer.prototype.getName = function () {
        console.log("name");
        return this.name;
    };
    return Customer;
}(Product));
var c2 = new Customer();
c2.getName();
var NewCustomer = /** @class */ (function (_super) {
    __extends(NewCustomer, _super);
    function NewCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewCustomer;
}(Customer));
//# sourceMappingURL=product.js.map