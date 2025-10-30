// singleton
// Object.create

// object literals

const mysym = Symbol("shaon1")


const jsuser1 = {

name : "Rezwan",
[mysym]: "R1",

age :18,

email: "rezwan@gmail.com",

address:"Rajshahi",

friend:["tom","jerry"]
}
console.log(jsuser1.name);
console.log(jsuser1["name"]);
// use symbol
console.log(jsuser1[mysym]);
console.log(jsuser1);
console.log(typeof jsuser1[mysym]);

///////

jsuser1.email = "rezwan111111111111@gmail"

console.log(jsuser1);
// dont change value
// Object.freeze(jsuser1)
jsuser1.email = "rezwan222222222222@gmail"

console.log(jsuser1);

jsuser1.greetfirst = function(){

    console.log("hello");
    console.log(`hello ${this.name}`);
}
console.log(jsuser1.greetfirst());