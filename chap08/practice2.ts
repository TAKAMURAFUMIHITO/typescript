export {};

const pi = 3.14;
const num = [1, 3, 5, 7, 9];
num.forEach((value: number, index: number, array: number[]) => {
  const area = value ** 2 * pi;
  console.log(`半径${value}の円の面積：${area}`);
});
