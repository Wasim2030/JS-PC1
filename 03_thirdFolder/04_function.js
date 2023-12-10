const user = {
    name: "wasim",
    language: "javaScript",
    welcomeMessage: function () {
      console.log(`${this.name}, welcome to ${this.language}`);
      console.log(this);
    },
  };
  
  user.welcomeMessage();
  
  user.name = "akhter";
  user.welcomeMessage();
  console.log(this);
  
  function any() {
    console.log(this);
  }
  any();
  
  function any1() {
    let name = "wasim";
    console.log(this.name);
  }
  
  any1();
  
  const any2 = () => {
    let name = "wasim";
    console.log(this.name);
    //   console.log(this);
  };
  
  any2();
  
  const add2Num = (n1, n2) => {
    return n1 + n2;
  };
  
  console.log(add2Num(9, 9));
  
  const greeting = () => "hello";
  console.log(greeting());
  
  const addNum = (x, y) => x + y;
  console.log(addNum(2, 9));
  
  const addAgain = () => 12 + 12;
  console.log(addAgain());
  
  const add3 = () => ({ userName: "wasim" });
  console.log(add3());
  
  const add4 = () => ({ userName: "wasim", class: 1 });
  console.log(add4());
  
  const add5 = () => ({ userName: "wasim", class: 1, rollNo: true });
  console.log(add5());
  
  const arr = [1, 9, 34, 3, 98];
  
  arr.forEach(function (x) {
    console.log(x * x);
  });
  
  arr.forEach((y) => console.log(y * 5));
  
  (function trail() {
    console.log("database connected");
  })();
  
  ((name) => console.log(`database connected ${name}`))("wasim");
  
  
  