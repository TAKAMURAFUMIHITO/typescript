export { }
function calcRectangleArea(height: number, width = height): number {
  const area = height * width;
  return area;
}

let area = calcRectangleArea(11, 24);
console.log(`縦11で横24の長方形の面積:${area}`)
area = calcRectangleArea(13);
console.log(`一辺が13の正方形の面積:${area}`)
