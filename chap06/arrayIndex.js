"use strict";
exports.__esModule = true;
var nameList = ["中田", "田村", "村井", "井上", "上田"];
console.log(nameList);
nameList[4] = "上野";
nameList[5] = "野宮";
console.log(nameList);
console.log("\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9".concat(6, ":").concat(nameList[6]));
nameList[8] = "宮本";
console.log(nameList);
// 未定義でも、要素数に含まれる
// constになっているけど、配列の中身を変更しているにすぎないので、再代入とはならない
