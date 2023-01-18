"use strict";
exports.__esModule = true;
function showSigma2N(n) {
    var ans = 0;
    for (var i = 0; i <= n; i++) {
        ans += i;
    }
    console.log("\u7D50\u679C:".concat(ans));
}
var num = 100;
showSigma2N(num);
num = 150;
showSigma2N(num);
num = 200;
showSigma2N(num);
