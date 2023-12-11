for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  
  // for loop on array
  
  let myArr = ["batman", "thor", "ironman", "hulk"];
  
  for (let i = 0; i < myArr.length; i++) {
    console.log(i);
    const element = myArr[i];
    console.log(element);
  }
  
  // break and continue
  
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      console.log("5 detected");
      break;
    }
    console.log(`the value of i is ${i}`);
  }
  
  for (let i = 0; i < 8; i++) {
    if (i == 4) {
      console.log("4 detected and continue here");
      continue;
    }
    console.log(`the value of i is ${i}`);
  }
  