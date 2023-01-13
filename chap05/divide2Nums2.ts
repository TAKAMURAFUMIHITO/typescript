export { }
for (let i = 1; i <= 5; i++){
  console.log(`${i}回目`);
  const num1 = Math.round(Math.random() * 100);
  if (num1 == 0) {
    console.log(`0が出たので、次の処理へスキップします。`)
    continue;
  }
  for (let j = 1; j <= 5; j++){
    const num2 = Math.round(Math.random() * 100);
    const ans = num2 / num1;
    console.log(`num1=${num1}`);
    console.log(`num2=${num2}`);
    console.log(`num2÷num1=${ans}`);
  }
}
