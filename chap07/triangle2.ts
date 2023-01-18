export { }
function calcTriangleArea(bottom: number, height: number): number {
  const area = bottom * height / 2;
  return area;
}

const area = calcTriangleArea(25, 15);
console.log(`面積は${area}`);
