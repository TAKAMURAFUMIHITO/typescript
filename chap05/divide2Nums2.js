"use strict";
exports.__esModule = true;
for (var i = 1; i <= 5; i++) {
    console.log("".concat(i, "\u56DE\u76EE"));
    var num1 = Math.round(Math.random() * 100);
    if (num1 == 0) {
        console.log("0\u304C\u51FA\u305F\u306E\u3067\u3001\u6B21\u306E\u51E6\u7406\u3078\u30B9\u30AD\u30C3\u30D7\u3057\u307E\u3059\u3002");
        continue;
    }
    for (var j = 1; j <= 5; j++) {
        var num2 = Math.round(Math.random() * 100);
        var ans = num2 / num1;
        console.log("num1=".concat(num1));
        console.log("num2=".concat(num2));
        console.log("num2\u00F7num1=".concat(ans));
    }
}
