let myDate = new Date();

console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth() + 1);
console.log(myDate.getSeconds());

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 8, 5, 33, 33);
console.log(myCreatedDate);

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString());

let otherDate = new Date("2023,01, 23");
console.log(otherDate);

let aDate = new Date("1993-06-27");
console.log(aDate);

let bDate = new Date("1995-09-10");
console.log(bDate);

let xDate = new Date();

console.log(xDate);
console.log(xDate.getDate());
console.log(xDate.getMonth() + 1);

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp.toString());
console.log(myTimeStamp.toLocaleString());
console.log(Math.floor(myTimeStamp));
console.log(Math.floor(myTimeStamp / 1000));
console.log(Math.floor(myTimeStamp / (1000 * 60)));
console.log(Math.floor(myTimeStamp / (1000 * 60 * 60)));
console.log(Math.floor(myTimeStamp / (1000 * 60 * 60 * 24)));

let dateAgain = new Date();
console.log(dateAgain);
console.log(dateAgain.getMonth() + 1);
