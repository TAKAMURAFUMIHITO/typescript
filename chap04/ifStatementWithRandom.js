"use strict";
exports.__esModule = true;
var num = Math.round(Math.random() * 100);
console.log("num\u306E\u5024:".concat(num));
if (num > 50) {
    console.log("50より大きい");
}
console.log("処理完了");
// random()メソッド　0以上1未満の乱数
// round()メソッド　四捨五入
