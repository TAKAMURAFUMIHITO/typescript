"use strict";
exports.__esModule = true;
var num = Math.round(Math.random() * 100);
console.log("num\u306E\u5024:".concat(num));
if (num % 2 == 0 && num % 3 == 0) {
    console.log("6の倍数");
}
else {
    console.log("6の倍数ではない");
}
console.log("処理終了");
/*

&& かつ
|| または
! not

*/
