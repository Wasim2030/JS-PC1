let a = 90;

var c = 200;
console.log("c ", c);

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("scoped a " + a);
  console.log("scoped b " + b);
}

console.log("a ", a);
console.log("c ", c);

function one() {
  const userName = "wasim";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  //   console.log(website);
  two();
}

one();

if (true) {
  const userName1 = "akhter";

  if (userName1 === "akhter") {
    const channel = "AajTak";

    console.log(userName1 + "  " + channel);
  }

  console.log(userName1);

  //   console.log(channel);
}

console.log(addTwo(5));
function addTwo(num) {
  return num + 2;
}

// console.log(add5(5));
const add5 = function (num) {
  return num + 5;
};
console.log(add5(5));
