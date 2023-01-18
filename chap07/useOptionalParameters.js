"use strict";
exports.__esModule = true;
function showCircumference(radius, pi) {
    if (pi == undefined) {
        pi = 3.14;
    }
    var circumference = 2 * pi * radius;
    console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055:").concat(circumference));
}
showCircumference(4, 3.14159);
showCircumference(4);
