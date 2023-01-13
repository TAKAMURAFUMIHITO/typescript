export { }
for (let i = 1; i <= 10; i++){
  const num = Math.round(Math.random() * 10);
  console.log(`${i}個目の乱数:${num}`);
  if (num == 5){
    console.log("5が発生したのでbreak");
    break;
  }
  console.log(`${i}回目の繰り返し処理が無事完了`);
}
console.log("すべての処理終了");

// ループ処理内のbreakは全てのループ処理を終了させる
