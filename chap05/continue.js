"use strict";
exports.__esModule = true;
for (var i = 1; i <= 10; i++) {
    var num = Math.round(Math.random() * 10);
    console.log("".concat(i, "\u500B\u76EE\u306E\u4E71\u6570:").concat(num));
    if (num == 5) {
        console.log("5が発生したのでcontinue");
        continue;
    }
    console.log("".concat(i, "\u56DE\u76EE\u306E\u7E70\u308A\u8FD4\u3057\u51E6\u7406\u304C\u7121\u4E8B\u5B8C\u4E86"));
}
console.log("すべての処理終了");
// continueはループ内の残りの処理を実行せずに、次のループまでスキップする
