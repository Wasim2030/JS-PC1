// truthy and falsy

const userEmail = "wasim@grok";
if (userEmail) {
  console.log("Non empty string is a truthy value");
}

const userEmail1 = "";
if (userEmail1) {
  console.log("it will not be printed");
} else {
  console.log("Empty string is a falsy value");
}

const emptyArray = [];
if (emptyArray) {
  console.log("empty array is a truthy value");
}

if (false) {
  console.log("it will not be printed");
} else {
  console.log("false is a falsy value");
}

if (0) {
  console.log("it will not be printed");
} else {
  console.log("0 is a falsy value");
}

if (-0) {
  console.log("it will not be printed");
} else {
  console.log("-0 is a falsy value");
}

if (0n) {
  console.log("bigint");
} else {
  console.log("0n is a falsy value");
}

if (undefined) {
  console.log("its undefined");
} else {
  console.log("undefined is a falsy value");
}

if (null) {
  console.log("its a null value");
} else {
  console.log("null is a falsy value");
}

if (NaN) {
  console.log("its a NaN");
} else {
  console.log("NuN is a falsy value");
}

// checking empty array

let empArray = [];
if (empArray.length === 0) {
  console.log("its an empty array");
}

// checking empty object

let emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("its an empty object");
}

console.log(false === 0);
console.log(false == 0);

console.log(false == "");

console.log(0 == "");

// nullish coalsing

let val1;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 18;
console.log(val1);

val1 = 0 ?? 10;
console.log(val1);

val1 = null ?? undefined ?? 12 ?? 90;
console.log(val1);

// ternary operator

let age = 28;
age > 18 ? console.log("you can drive") : console.log("you can not drive");

let age1 = 29;
console.log(age1 > 25 ? "you can go" : "you can not go");
