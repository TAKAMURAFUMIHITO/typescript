var Radius = /** @class */ (function () {
    function Radius() {
        this.name = "taro";
    }
    Radius.showCircumference = function (radius) {
        var circumference = 2 * 3.14 * radius;
        console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055:").concat(circumference));
        // プロパティの参照はできない
        // console.log(this.name);
    };
    return Radius;
}());
// newが不要になる
Radius.showCircumference(10);
