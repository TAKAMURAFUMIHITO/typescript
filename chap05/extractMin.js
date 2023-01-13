"use strict";
exports.__esModule = true;
var min = 100;
for (var i = 1; i <= 10; i++) {
    var num = Math.round(Math.random() * 100);
    console.log(num);
    if (num < min) {
        min = num;
    }
}
console.log("\u6700\u5C0F\u5024\u306F".concat(min));
