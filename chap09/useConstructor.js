"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
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
    function Student(name, english, math, japanese) {
        this.name = name;
        this.english = english;
        this.math = math;
        this.japanese = japanese;
    }
    Student.prototype.showScoreSum = function () {
        var sum = this.english + this.math + this.japanese;
        console.log(("".concat(this.name, "\u306E\u5408\u8A08\u5F97\u70B9:").concat(sum)));
    };
    Student.prototype.showScoreAvg = function () {
        var sum = this.english + this.math + this.japanese;
        var avg = Math.round(sum / 3 * 10) / 10;
        console.log("".concat(this.name, "\u306E\u5E73\u5747\u70B9:").concat(avg));
    };
    return Student;
}());
var taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoreSum();
taro.showScoreAvg();
