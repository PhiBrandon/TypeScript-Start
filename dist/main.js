var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil(name, startColor) {
        this.color = startColor;
        this.name = name;
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    SweetSweetBasil.prototype.getName = function () {
        console.log(this.name);
    };
    SweetSweetBasil.prototype.toString = function () {
        var final_string = "Your name is: " + this.name + " and your favorite color is " + this.color;
        console.log(final_string);
    };
    return SweetSweetBasil;
}());
var name1 = "Jake";
var basil = new SweetSweetBasil(name1, "purple");
console.log(basil.color);
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startColor) {
        return _super.call(this, name, startColor) || this;
    }
    Basil.prototype.setNewColor = function (newColor) {
        this.color = newColor;
    };
    return Basil;
}(SweetSweetBasil));
var basil3 = new Basil("John", "Red");
basil3.getColor();
basil3.getName();
basil3.toString();
basil3.setNewColor("Orange");
basil3.toString();
var hello = "Hello Friend";
var num = 123;
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 200;
        return b;
    }
    return a;
}
console.log(f(true));
console.log(f(false));
