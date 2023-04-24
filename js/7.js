const arrNum = [-1, -27, -90, 88, 324839, 455365634, -32023, -7930, 45467, 999];
const arrNumLenght = arrNum.length;
for (let i = 1; i <= arrNumLenght; i += 1) {
  if (arrNum[i] % 2 === 0) {
    console.log(arrNum[i]);
  }
}