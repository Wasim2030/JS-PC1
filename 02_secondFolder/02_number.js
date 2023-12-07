const score1 = 400;
console.log(score1);

const score = new Number(800);
console.log(score);

console.log(score.toString());
console.log(typeof score);
console.log(score.toString().length);
console.log(score.toFixed(2));

const aNum = 897.878;
console.log(aNum.toPrecision(5));
console.log(aNum.toPrecision(1));

const manyZeros = 1000000;

console.log(manyZeros.toLocaleString());
console.log(manyZeros.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
