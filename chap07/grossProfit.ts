export { }
function showGrossProfit(sales: number, profit?: number) {
  if (profit == undefined) {
    profit = 0.7;
  }
  const grossProfit = Math.round(sales * 0.9 * profit);
  console.log(`${sales}の粗利:${grossProfit}(粗利益${profit})`);
}

showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
