// while loop

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 0;
while (j <= 9) {
  console.log(j);
  j = j + 2;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(arr);
  console.log(`the value of ${arr} is ${myArray[arr]}`);
  arr++;
}

// let score = 10;
let score = 200;

do {
  console.log(`score is ${score}`);
  score++;
} while (score < 20);
