if (true) {
    console.log("if true statement");
  }
  
  if (false) {
    console.log("if false statement");
  }
  
  if (2 == 2) {
    console.log("two is equal to two");
  }
  
  if (9 < 12) {
    console.log("9 is less than 12");
  }
  
  const isLoggedIn = true;
  const temprature = 40;
  
  if (temprature === 40) {
    console.log(`temprature is ${temprature}`);
  } else {
    console.log(`temprature is not 40`);
  }
  
  const score = 200;
  if (score > 100) {
    const power = "fly";
    console.log(`userpower : ${power}`);
  }
  
  // console.log(`userpower : ${power}`);
  
  const balance = 700;
  if (balance > 500) console.log("more");
  
  if (balance < 500) {
    console.log("blance is less than 500");
  } else if (balance < 750) {
    console.log("blance is less than 750");
  } else if (balance < 1000) {
    console.log("blance is less than 1000");
  } else {
    console.log("blance is more than 1000");
  }
  
  const haveAccount = true;
  const netBanking = false;
  const haveBalance = true;
  const mobileVerified = true;
  
  if (haveAccount && mobileVerified && 2 == 2) {
    console.log("you can login");
  }
  
  if (haveAccount || netBanking || 2 == 3) {
    console.log("account exists");
  }
  