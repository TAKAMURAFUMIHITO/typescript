"use strict";
exports.__esModule = true;
console.log("9になるまで続きます。処理開始");
var num = Math.round(Math.random() * 10);
while (num != 9) {
    console.log("\u4E71\u6570\u306E\u5024:".concat(num));
    num = Math.round(Math.random() * 10);
}
console.log("\u4E71\u6570\u306E\u5024:".concat(num));
console.log("処理を終了します");
