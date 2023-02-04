class Radius {
  name = "taro";

  static showCircumference(radius: number) {
    const circumference = 2 * 3.14 * radius;
    console.log(`半径${radius}の円周の長さ:${circumference}`);

    // プロパティの参照はできない
    // console.log(this.name);
  }
}
// newが不要になる
Radius.showCircumference(10);
