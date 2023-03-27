export {};

class BodyMass {
  name: string;
  height: number;
  weight: number;

  bmi() {
    return Math.round((this.weight / (this.height / 100) ** 2) * 10) / 10;
  }
  idealWeight() {
    return Math.round(22 * (this.height / 100) ** 2);
  }

  constructor(name: string, height: number, weight: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

const bodyMass = new BodyMass("髙村", 171.4, 68.4);
console.log(`${bodyMass.name}さんのBMI値:${bodyMass.bmi()}`);
console.log(`${bodyMass.name}さんの理想体重:${bodyMass.idealWeight()}kg`);
