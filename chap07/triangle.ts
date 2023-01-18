export { }
function showTriangleArea(bottom: number, height: number) {
  const area = bottom * height / 2;
  console.log(`辺${bottom}で高さ${height}の面積は${area}`);
}

showTriangleArea(25, 15);
