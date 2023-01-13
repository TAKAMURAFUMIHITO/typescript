"use strict";
exports.__esModule = true;
var ans = 0;
for (var i = 1; i <= 100; i++) {
    ans += i;
}
console.log("\u7D50\u679C:".concat(ans));
// console.log(`ループ終了後のi:${i}`);
// iの存在範囲はforの{}の中だけなので、最後にiは表示できない。
