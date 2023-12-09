console.log("W");
console.log("a");
console.log("s");
console.log("i");
console.log("m");

function sayMyName() {
  console.log("W");
  console.log("a");
  console.log("s");
  console.log("i");
  console.log("m");
}

sayMyName();
sayMyName();

function addThreeNo(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(addThreeNo(1, 3, 9));

const addThreeNo1 = addThreeNo(22, 22, 22);
console.log(addThreeNo1);

function addtwoNo(n1, n2) {
  return n1 + n2;
  console.log("its unreachable");
}

console.log(addtwoNo(22, 22));

function loginUserMessage(userName) {
  return `${userName} just logged in`;
}

console.log(loginUserMessage(1));
console.log(loginUserMessage("wasim"));

function loginUserMessage1(userName = "wasim") {
  return `${userName} just logged in`;
}

console.log(loginUserMessage1());
console.log(loginUserMessage1("raj"));
