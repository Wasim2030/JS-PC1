function addCartPrice(num1) {
    return num1;
  }
  
  console.log(addCartPrice(200));
  console.log(addCartPrice(200, 300, 600));
  
  function addCartPrice1(...num2) {
    return num2;
  }
  console.log(addCartPrice1(200, 800, 320));
  
  function addCartPrice3(val1, val2, ...num3) {
    return num3;
  }
  
  console.log(addCartPrice3(980, 23, 900, 800, 1200, 987));
  
  const user1 = {
    userName: "wasim",
    price: 299,
  };
  
  function handleObject(anyObj) {
    console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`);
  }
  
  handleObject(user1);
  
  handleObject({
    userName: "sam",
    price: 999,
  });
  
  const functionArray = [300, 800, 1200, 34];
  
  function handleArray(getArray) {
    console.log(getArray[2]);
  }
  handleArray(functionArray);
  
  handleArray([234, 23423, 234234, 23452345, 23536, 77]);
  