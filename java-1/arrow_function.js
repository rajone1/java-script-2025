
const myinfo = {
name: "Rez",
age:18,
id:"r15",

usemyinfo :function (){

console.log(this.name);


}


}
// myinfo.usemyinfo()

myinfo.name = "sha"
// myinfo.usemyinfo()



// +++++++++use this

function one(){
console.log(this);

}
// one()

const two = function(){
console.log(this);

}
// two()
// arrow function this not working

const three = ()=>{
console.log(this);

}
// three()
// arrow function syntex

// ()=>{},
// const one =()=>{},
// const one =()=>() jodi aklone code likhe {} o return likha lagana


const ex1 = (num1 ,num2)=>{

return num1+num2

}
console.log(ex1(5,10));

// 

const ex2 = (num1 ,num2)=>(num1+num2)
console.log(ex2(5,10));
// use object

const ex3 = (num1 ,num2)=>({id:"r15"})

console.log(ex3());


// +++++++++++++++++

// Immediately Invoked Function Expressions (IIFE)

// syntex ()(); prothom tatae sob code likhbo ,porartate parametr value dibo

function iife(){
console.log(`hello i use iife`);

}
// iife()

// use iife
(function iife(){
console.log(`hello i use iife`);

})();

// use arrow function

(()=>{
console.log(`use arrow funnction in iife  `);


})();
// pass value
((name)=>{
console.log(`use arrow funnction in iife  ,${name}`);


})("shaon");



// more ex


((num1 , num2)=>{
return num1+num2 


})(10,15)