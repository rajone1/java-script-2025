let name = "Rezwan"
let address = "Durgapur"

// use bettex

console.log(`my name is ${name} i live in${address}`);

const myname3 = new String("Rezwan")
console.log(typeof(myname3));
console.log(myname3.toUpperCase());
console.log(myname3.length);
console.log(myname3[0]);
console.log(myname3.indexOf("z"));

console.log(myname3.__proto__);

// slice

const slice1 = myname3.slice(-9,4)
console.log(slice1);
const n = "     Rezwan    "
console.log(n);
console.log(n.trim());


const url = "www.rezwan20%ahommed.com"

console.log(url.replace("20%" , "-"));
console.log(url.includes("rez"));
console.log(url.split("20%"));



const balance = 1234
console.log(balance);
const balance2 = new Number (5678)
console.log(balance2);

const convert  = balance.toString().length
console.log(convert);
const balance3 = 123.23
console.log(balance3.toFixed());
console.log(balance3.toPrecision(4));

const lc = 1239994374932987742
console.log(lc.toLocaleString("en-bd"));

