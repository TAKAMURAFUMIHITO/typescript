export { }
const array: { [key: string]: number; } = {
  "い組": 35,
  "ろ組": 36,
  "は組": 37,
  "に組": 34,
  "ほ組": 36
}
for (const key in array) {
  console.log(`${key}の人数:${array[key]}人`);
}

let total = 0;
for (const key in array) {
  total += array[key];
}
console.log(`全体の人数:${total}人`);
