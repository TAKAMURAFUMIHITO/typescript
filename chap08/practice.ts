export {};
function calcVolume(x: number): number;
function calcVolume(x: number, y: number, z: number): number;
function calcVolume(x: number, y?: number, z?: number): number {
  let volume: number;
  if (y !== undefined && z !== undefined) {
    volume = x * y * z;
  } else {
    volume = x ** 3;
  }
  return volume;
}

const volume1 = calcVolume(4);
console.log(`一辺が4の立方体の体積: ${volume1}`);

const volume2 = calcVolume(4, 5, 6);
console.log(`各辺の長さが４、５、６の立方体の体積：${volume2}`);
