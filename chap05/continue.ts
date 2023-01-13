export { }
for (let i = 1; i <= 10; i++){
  const num = Math.round(Math.random() * 10);
  console.log(`${i}個目の乱数:${num}`);
  if (num == 5){
    console.log("5が発生したのでcontinue");
    continue;
  }
  console.log(`${i}回目の繰り返し処理が無事完了`);
}
console.log("すべての処理終了");

// continueはループ内の残りの処理を実行せずに、次のループまでスキップする
