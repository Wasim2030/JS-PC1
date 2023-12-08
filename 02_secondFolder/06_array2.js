const herosIndian = ["Doga", "Kobi", "Nagraj", "Drava"];
const comicHeros = ["Batman", "Iron-Man", "Gladiator", "Hulk"];

console.log(herosIndian);

herosIndian.push(comicHeros);

console.log(comicHeros);
console.log(herosIndian);
console.log(herosIndian.length);
console.log(herosIndian[4]);

const allHeros = herosIndian.concat(comicHeros);
console.log(allHeros);

const allHeros1 = [...herosIndian, ...comicHeros];
console.log(allHeros1);

const arrayNew = [1, 2, 9, 12, [99, 56], 22, [12, 23, 19, [143, 987]]];

console.log(arrayNew);

const flartArrNew = arrayNew.flat(Infinity);
console.log(flartArrNew);

console.log(arrayNew.flat(0));
console.log(arrayNew.flat(1));
console.log(arrayNew.flat(2));
console.log(arrayNew.flat(100));

console.log(Array.isArray("Wasim"));
console.log(Array.from("wasim"));

let strCharcters = "abcdefghij k l m n o pqrst uvw xyz";
console.log(strCharcters);

console.log(Array.from(strCharcters));
console.log(strCharcters);

let obj = {
  name: "wasim",
};

console.log(Array.from(obj));

const n1 = 100;
const n2 = 200;
const n3 = 300;

console.log(Array.of(n1, n2, n3));
