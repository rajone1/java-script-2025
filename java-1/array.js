
// const delao array o object er valu change kora jaba


// other declaration  method
 
let newarry = new Array(1,2,3,4,5)
// console.log(newarry);



// 

const  myarray1 = [10,20,30,40,50,60,70,80,90]
// console.log(myarray1);

// console.log(myarray1[0]);
// console.log(myarray1.indexOf(40));
// console.log(myarray1.includes(90));
// console.log(myarray1.includes(100));
// method

myarray1.push(100);
myarray1.pop()
// console.log(myarray1);


// myarray1.unshift(200)
// myarray1.shift()
// console.log(myarray1);

const myarrayjoin = myarray1.join()
// console.log(typeof(myarrayjoin));

// slice 
// splice use korla main value change hoi

const  myarray4 = [10,20,30,40,50,60,70,80,90]

// console.log("A",myarray4);
// const slice1 = myarray4.slice(1,3)
// console.log(slice1);

// console.log("b",myarray4);
// const splice1 = myarray4.splice(1,3)

// console.log(splice1);
// console.log("c",myarray4);

// advance

const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]


const add1 = marvel_heros.concat(dc_heros)
// console.log(add1);

const add2 = [...marvel_heros,...dc_heros]
// console.log(add2);


// add all in one arry by flate
const manyvalue = [1,2,3,[5,6,7],20,[100,200,400],]

const flate1 = manyvalue.flat(Infinity)
// console.log(flate1);

// type

console.log(Array.isArray("REZWAN"));
console.log(Array.from("REZWAN"));

console.log(Array.from({name: "hitesh"})) // interesting


// add many value and make array 

const a = 100
const b = 300
const c = 800

const addall1 = Array.of(a,b,c)

console.log(addall1);