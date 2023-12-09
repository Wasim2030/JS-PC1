const fourObj = {
    fName: "wasim",
    lName: "akhter",
    email: "wasim@software.com",
    hello: function (name) {
      console.log(`hello ${this.email}`);
    },
  };
  
  console.log(fourObj.hello());
  console.log(fourObj.hello("Wasim"));
  
  const fiveObj = {
    fName: "wasim",
    lName: "akhter",
    email: "wasim@software.com",
    hello: function () {
      return `hello ${this.email}`;
    },
  };
  
  console.log(fiveObj);
  console.log(fiveObj.hello());
  
  function greets() {
    console.log("no return keyword so undefined is returned");
  }
  
  greets();
  console.log(greets());
  
  function greets1() {
    return "no return keyword so undefined is returned";
  }
  
  greets1();
  console.log(greets1());
  
  const xUser = new Object();
  console.log(xUser);
  
  const yUser = {};
  console.log(yUser);
  
  xUser.id = "abc123";
  xUser.name = "wasim";
  
  console.log(xUser);
  
  const oneUser = {
    account: "X",
    details: {
      fullName: {
        fName: "wasim",
        lName: "akhter",
      },
      xUser: true,
    },
    email: "x@akhter.com",
  };
  
  console.log(oneUser);
  console.log(oneUser.details);
  console.log(oneUser.details.fullName.fName);
  
  const whatsAppUser = new Object();
  console.log(whatsAppUser);
  
  whatsAppUser.name = "wasim";
  whatsAppUser.friends = 99;
  whatsAppUser.haveAccount = true;
  
  console.log(whatsAppUser);
  
  const twoUser = {
    account: "X",
    fName: "wasim",
    lName: "akhter",
    xUser: true,
    email: "x@akhter.com",
  };
  
  const threeUser = {
    account: "insta",
    fName: "sam",
    lName: "disuza",
    xUser: true,
    email: "sam@disuza.com",
  };
  
  const objAll = { twoUser, threeUser };
  
  console.log(objAll);
  
  const objAssign = Object.assign(twoUser, threeUser);
  console.log(objAssign);
  
  const objAssign1 = Object.assign({}, twoUser, threeUser);
  console.log(objAssign1);
  
  const objSpread = { ...twoUser, ...threeUser };
  
  console.log(objSpread);
  
  const originalObject = {
    prop1: "value1",
    prop2: "value2",
    nestedObject: {
      nestedProp: "nestedValue",
    },
  };
  
  // Creating a shallow copy using spread syntax ***********
  const shallowCopy = { ...originalObject };
  
  // Modifying the shallow copy  ************************
  shallowCopy.prop1 = "modifiedValue";
  shallowCopy.nestedObject.nestedProp = "modifiedNestedValue";
  
  console.log(originalObject);
  console.log(shallowCopy);
  
  const obj1 = { 1: "a", 2: "b" };
  const obj2 = { 3: "a", 4: "b" };
  const obj4 = { 5: "a", 6: "b" };
  
  let finalObj = { ...obj1, ...obj2, ...obj4 };
  
  console.log(finalObj);
  
  const users = [
    {
      id: 1,
      email: "w@gmail.com",
    },
    {
      id: 1,
      email: "a@gmail.com",
    },
    {
      id: 1,
      email: "s@gmail.com",
    },
  ];
  
  console.log(users);
  users[0].email = "akhter@gmail.com";
  console.log(users);
  
  const fbUser = new Object();
  
  console.log(fbUser);
  
  fbUser.id = 1;
  fbUser.name = "superman";
  fbUser.isLoggedIn = false;
  console.log(fbUser);
  
  console.log(Object.keys(fbUser));
  console.log(Object.values(fbUser));
  console.log(Object.entries(fbUser));
  console.log(fbUser.hasOwnProperty("name"));
  console.log(fbUser.hasOwnProperty("others"));
  
  const readEraUsers = ["name", "address", "email", true];
  
  console.log(Object.keys(readEraUsers));
  console.log(Object.values(readEraUsers));
  