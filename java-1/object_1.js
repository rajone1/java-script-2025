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
// console.log(jsuser1[mysym]);
// console.log(jsuser1);
// console.log(typeof jsuser1[mysym]);

///////

// jsuser1.email = "rezwan111111111111@gmail"

// console.log(jsuser1);
// dont change value
// Object.freeze(jsuser1)
jsuser1.email = "rezwan222222222222@gmail"

// console.log(jsuser1);

jsuser1.greetfirst = function(){

    // console.log("hello");
    // console.log(`hello ${this.name}`);
}
// console.log(jsuser1.greetfirst());


// object 2nd part 


// const twinkale = new Object() 

const twinkale = {}

twinkale.name = "rezwan"
twinkale.id= "r111"
twinkale.address = "durgapur"

// console.log(twinkale);


const twinkale1=[
{name:"sha",
    id:"1"
},
{name:"sha",
    id:"2"
},
{name:"sha",
    id:"3"
}

]
const t = twinkale1[2].id
// console.log(t);

const twinkale3  ={

name:
{
username:{

firstname:"sh",
lastname :"aon"

}

}
}

console.log(twinkale3.name.username.firstname);


const apptwinkale ={
name:"Rezwan",
id:"r1",
address:"Rajshahi"


}
console.log(Object.keys(apptwinkale));
console.log(Object.values(apptwinkale));
console.log(Object.entries(apptwinkale));
// element ace ki nai chack
console.log(apptwinkale.hasOwnProperty("id"));

// add all

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const add = Object.assign({},obj1,obj2)

// console.log(add);

// sprade operator

// const add1={...obj1,...obj2,...obj4}
// console.log(add1);



const apptwinkale222 ={
name:"Rezwan",
id:"r1",
address:"Rajshahi"


}

// destructureing

// const {} =

const {name } = apptwinkale222

console.log(name);

// i can add extra name
const {address : ad} = apptwinkale222
console.log(ad);