"use strict";
exports.__esModule = true;
var array = [15, 36, 21, 48, 64, 59, 7];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    console.log(element);
}
var total = 0;
for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
    var element = array_2[_a];
    total += element;
}
console.log("\u5408\u8A08\u306F\u3001".concat(total));
