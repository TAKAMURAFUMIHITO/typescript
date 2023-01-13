export { }

const num = Math.round(Math.random() * 100);
console.log(`numの値:${num}`);
if (num > 50) {
  console.log("50より大きい");
}
console.log("処理完了");

// random()メソッド　0以上1未満の乱数
// round()メソッド　四捨五入
