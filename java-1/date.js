let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


const myCreateDate = new Date(2025,0,12)
// console.log(myCreateDate.toDateString());
// const myCreateDate2 = new Date("2025-01-15")
// console.log(myCreateDate2.toLocaleString());


let myCreateDate3 = new Date()
// console.log(myCreateDate3);
// console.log(myCreateDate3.getMonth());
// console.log(myCreateDate3.getDay());

// get time

let mytime1 = Date.now()
// console.log(mytime1);
// get second
console.log(Math.ceil((Date.now()/1000)))

// i can compare mili second

// console.log(myCreateDate3.getTime());


// importent

myCreateDate3.toLocaleString("default",{

weekday:"long"

})

console.log(myCreateDate3);


