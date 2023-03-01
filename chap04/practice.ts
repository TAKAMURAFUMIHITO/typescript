export{}
const num: number = Math.round(Math.random() * 100);
console.log(`numの値:${num}`);
const bool = (num > 50);
if (bool) {
  console.log("50より大きい");
} else {
  console.log("50より小さい");
}
console.log("処理終了");