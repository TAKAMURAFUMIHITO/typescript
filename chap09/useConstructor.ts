export { }
class Student {
  /*
  name: string = "";
  english: number = 0;
  math: number = 0;
  japanese: number = 0;

  constructor(name: string, english: number, math: number, japanese: number) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanese = japanese;
  }
  */

  // パラメータプロパティ：プロパティ宣言とcオンストラクタ内の処理の記述が不要
  constructor(public name: string, public english: number, public math: number, public japanese: number) {}

  showScoreSum() {
    const sum = this.english + this.math + this.japanese;
    console.log((`${this.name}の合計得点:${sum}`));
  }

  showScoreAvg() {
    const sum = this.english + this.math + this.japanese;
    const avg = Math.round(sum / 3 * 10) / 10;
    console.log(`${this.name}の平均点:${avg}`);
  }
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoreSum();
taro.showScoreAvg();

// ただし、実行部で合計値を取得することはできない
