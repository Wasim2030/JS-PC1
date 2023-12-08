const myArr1 = [0, 1, 2, 3, 4, 5];

console.log(myArr1);

const myArr = new Array(9, 8, 7, 6, 5, 4, 3, 2);

console.log(myArr);

console.log(typeof myArr);
console.log(typeof myArr1);

const myArr2 = [1, 2, 3, 4, 5, 8];
console.log(myArr2);

myArr2.push(2);
myArr2.push(2, 9, 0);
let y = myArr2.pop();
myArr2.pop();
console.log(y);
myArr2.shift();
myArr2.unshift(988);

console.log(myArr2.includes(3));
console.log(myArr2.includes(33));

console.log(myArr2.indexOf(22));
console.log(myArr2.indexOf(1));
console.log(myArr2.indexOf(2));
console.log(myArr2.indexOf(5));

console.log(myArr2);

const arrX = [1, 2, 3, 4, 5];
const arrY = [0, 9, 8, 7, 6];

const arrJoin = arrX.join();

const arrJoin1 = arrX.join(" and ");

console.log(arrJoin);

console.log(typeof arrJoin);
console.log(arrJoin1);

const arrSlice = [1, 2, 3, 4, 5, 77, 9, 7, 999, 8];

console.log(arrSlice);

arrSlice.slice(2, 4);
let slc = arrSlice.slice(2, 7);

console.log(slc);

console.log(arrSlice);

const arrSplice = [31, 52, 83, 4, 51, 80, 9, 12];

let modifyy = arrSplice.splice(2, 5);

console.log(modifyy);

console.log(arrSplice);
