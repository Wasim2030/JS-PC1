console.log(2 > 3);
console.log(3 >= 3);
console.log(88 < 99);
console.log(2 == 2);
console.log(2 != 2);

console.log("9" > 8);
console.log("08" < 9);

console.log(null > 0);
console.log(null > 22);
console.log(null < 0);
console.log(null < 22);
console.log(null >= 22);
console.log(null <= 22);

console.log(null >= 0);
console.log(null <= 0);

console.log(null <= 1);
console.log(null >= 1);

console.log(null == 0);
console.log(null != 0);

console.log(null < 0);
console.log(null == 0);
console.log(null > 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
console.log(undefined == 0);

console.log(2 == 2);
console.log(2 === 2);

console.log("2" == 2);
console.log("2" === 2);

const a = 5;
const b = 5;

console.log(a === b);

const x = Symbol("9");
const y = Symbol("9");

console.log(x == y);
console.log(x === y);

const heros = ["batman", "ironman", "hulk"];
console.log(heros);

console.log(typeof heros);

const marks = {
  math: 96,
  science: 78,
  socScience: 66,
  english: 52,
  hindi: 46,
};

console.log(marks);
console.log(typeof marks);

console.log(
  typeof function demo() {
    return 3 + 3;
  }
);

let func = () => {
  return 2 + 2;
};
func();
console.log(func());
console.log(typeof func);
