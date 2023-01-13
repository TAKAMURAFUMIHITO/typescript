"use strict";
exports.__esModule = true;
// 場合分け
var num = Math.round(Math.random() * 5);
switch (num) {
    case 1:
        console.log("大吉！");
        break;
    case 2:
        console.log("中吉！");
        break;
    case 3:
        console.log("小吉！");
        break;
    case 4:
        console.log("凶！");
        break;
    case 5:
        console.log("大凶！");
        break;
    default:
        console.log("これが出たら破滅です！！");
        break;
}
console.log("おみくじ終わり");
// break {}内の処理から抜ける
// caseは、条件を満たす場合まで処理をスキップする役割だから、breakコマンドがないと、吉の場合、凶、大凶、破滅まで表示されることになる
// caseは積み重ねることもできる
