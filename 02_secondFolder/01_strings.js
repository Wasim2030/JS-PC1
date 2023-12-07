const name = "Wasim";

console.log(name);

const aboutMe = `Hello, my name is ${name}`;
const aboutMe1 = `Hello, my name is ${name.toUpperCase()}`;

console.log(aboutMe);
console.log(aboutMe1);

const email = new String("wasim- 01  -com");

console.log(email);

console.log(typeof email);

console.log(email[0]);
console.log(email[7]);
console.log(email[8]);
console.log(email[11]);
console.log(email[12]);

console.log(email.toUpperCase());
console.log(email);

console.log(email.__proto__);

const oneLiner = "The quick brown fox jumps over the lazy dog the the";

console.log(oneLiner.charAt(35));
console.log(oneLiner.charAt(0));
console.log(oneLiner.indexOf("e"));
console.log(oneLiner.substring(0, 22));
console.log(oneLiner.slice(3));
console.log(oneLiner.slice(3, 15));
console.log(oneLiner.slice(-5));
console.log(oneLiner.slice(-5, -1));
console.log(oneLiner.trim());
console.log(oneLiner.replace("the", "power"));
console.log(oneLiner.includes("the"));
console.log(oneLiner.includes("available"));

const url = "https://github.com/Wasim2030/JS-PC1/tree/main";

const url1 = "https://github.com/Wasim2030/JS-PC1/tree/m%20in";

console.log(url1.replace("%20", "a"));
