
let myArray = [5, 2, 7, 10, 1, 8, 4, 9, 3, 6];
let max = myArray[0];
for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > max) {
    max = myArray[i];
  }
}
console.log("Максимальне значення в масиві: " + max);