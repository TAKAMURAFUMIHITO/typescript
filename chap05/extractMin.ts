export { }
let min = 100;
for (let i = 1; i <= 10; i++){
  const num = Math.round(Math.random() * 100);
  console.log(num);
  if (num < min) {
    min = num;
  }
}
console.log(`最小値は${min}`);
