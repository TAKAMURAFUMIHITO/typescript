"use strict";
exports.__esModule = true;
function showGrossProfit(sales, profit) {
    if (profit == undefined) {
        profit = 0.7;
    }
    var grossProfit = Math.round(sales * 0.9 * profit);
    console.log("".concat(sales, "\u306E\u7C97\u5229:").concat(grossProfit, "(\u7C97\u5229\u76CA").concat(profit, ")"));
}
showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
