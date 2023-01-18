const array = new Map();
array.set("い組", 35);
array.set("ろ組", 36);
array.set("は組", 37);
array.set("に組", 34);
array.set("ほ組", 36);
for (const [key, value] of array) {
    console.log(`${key}は${value}人`);
}
