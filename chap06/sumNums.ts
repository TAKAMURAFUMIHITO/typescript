export { }

const array: number[] = [15, 36, 21, 48, 64, 59, 7];
for (const element of array) {
  console.log(element);
}

let total = 0;
for (const element of array) {
  total += element;
}
console.log(`合計は、${total}`);
