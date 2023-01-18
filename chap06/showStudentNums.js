"use strict";
exports.__esModule = true;
var array = {
    "い組": 35,
    "ろ組": 36,
    "は組": 37,
    "に組": 34,
    "ほ組": 36
};
for (var key in array) {
    console.log("".concat(key, "\u306E\u4EBA\u6570:").concat(array[key], "\u4EBA"));
}
var total = 0;
for (var key in array) {
    total += array[key];
}
console.log("\u5168\u4F53\u306E\u4EBA\u6570:".concat(total, "\u4EBA"));
