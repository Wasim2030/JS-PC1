const jsUser = {
    name: "wasim",
    javascript: true,
    frontEnd: "HTML CSS JS",
    library: "React",
  };
  
  console.log(jsUser.name);
  console.log(jsUser["library"]);
  
  const mySymbol = Symbol("key1");
  
  let otherObj = {
    fName: "wasim",
    lName: "akhter",
    FullName: "wasim akhter",
    Symbol: "key1",
    [mySymbol]: "mySymbolkey",
  };
  
  console.log(otherObj.Symbol);
  console.log(typeof otherObj.Symbol);
  
  console.log(otherObj[mySymbol]);
  console.log(typeof otherObj[mySymbol]);
  
  console.log(otherObj["fName"]);
  
  let oneObj = {
    name: "wasim",
    email: "wasim@company.com",
  };
  
  console.log(oneObj);
  console.log(oneObj.email);
  
  oneObj.email = "akhter@world.com";
  
  console.log(oneObj);
  console.log(oneObj.email);
  
  const twoObj = {
    fName: "wasim",
    lName: "akhter",
    email: "wasim@software.com",
  };
  
  console.log(twoObj);
  
  Object.freeze(twoObj);
  
  console.log(twoObj);
  
  twoObj.email = "changed@email.com";
  
  console.log(twoObj.email);
  console.log(twoObj);
  
  const threeObj = {
    fName: "wasim",
    lName: "akhter",
    email: "wasim@software.com",
  };
  
  threeObj.greeting = function () {
    console.log("hello from function inside an object");
  };
  
  console.log(threeObj.fName);
  console.log(threeObj.greeting);
  console.log(threeObj.greeting());
  
  const fourObj = {
    fName: "wasim",
    lName: "akhter",
    email: "wasim@software.com",
    hello: function (name) {
      console.log(`hello ${name}`);
    },
  };
  
  console.log(fourObj.hello);
  console.log(fourObj.hello());
  console.log(fourObj.hello("Wasim"));
  