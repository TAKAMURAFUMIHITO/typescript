export { }

// 可変長引数はドット３つ "..."
// データ型は配列 []

function sumScores(...scores: number[]): number{
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total;
}

// 配列で書かない [10, 9, 8, 9]

const total6 = sumScores(10, 9, 9, 10, 8, 9);
console.log(`6人の審査員の合計点:${total6}`);
const total4 = sumScores(10, 9, 8, 9);
console.log(`4人の審査員の合計点:${total4}`);
