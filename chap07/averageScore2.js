"use strict";
exports.__esModule = true;
function calcAverage3Score(score1, score2, score3) {
    var average = (score1 + score2 + score3) / 3;
    return average;
}
var scoreNakada = [87, 77, 89];
var average = calcAverage3Score.apply(void 0, scoreNakada);
console.log("\u4EF2\u7530\u3055\u3093\u306E\u5E73\u5747\u70B9:".concat(average));
var scoreNakayama = [68, 87, 74];
average = calcAverage3Score.apply(void 0, scoreNakayama);
console.log("\u4E2D\u5C71\u3055\u3093\u306E\u5E73\u5747\u70B9:".concat(average));
