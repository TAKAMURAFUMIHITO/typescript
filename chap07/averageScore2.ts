export { }
function calcAverage3Score(score1: number, score2: number, score3: number): number{
  const average = (score1 + score2 + score3) / 3;
  return average;
}
const scoreNakada = [87, 77, 89] as const;
let average = calcAverage3Score(...scoreNakada);
console.log(`仲田さんの平均点:${average}`);

const scoreNakayama = [68, 87, 74] as const;
average = calcAverage3Score(...scoreNakayama);
console.log(`中山さんの平均点:${average}`);
