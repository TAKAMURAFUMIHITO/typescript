export { }
console.log("9になるまで続きます。処理開始");
let num = Math.round(Math.random() * 10);
while (num != 9){
  console.log(`乱数の値:${num}`);
  num = Math.round(Math.random() * 10);
}
console.log(`乱数の値:${num}`);
console.log("処理を終了します");
