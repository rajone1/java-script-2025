// loop 
// loop (value ,conditon ,instruction)

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     // console.log(element);
    
// }
// condition

// for (let index = 0; index <10; index++) {
//     const element = index;
    
//     if (index==4) {
//         console.log("this my number",element);
        
//     }console.log(element);
// }

// nested loop outer and inner


// for (let i = 1; i <=10; i++) {
//     const element = i;
//     console.log(`this is outer loop ${element}`);
//     for (let j = 1; j <=10; j++) {
//         const element2= j;
//         // console.log(`this is inner value${j} and this is again outer value ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }


// array

let array1 =["shaon", "ishrak","robin"]

for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    console.log(element);
}


// break and continue

// for (let index = 0; index < 15; index++) {
//     const element = index;
// if (index ===10) {
//     console.log("detected 10");
//     break
    
// }


// for (let index = 0; index < 15; index++) {
//     const element = index;
// if (index ===10) {
//     console.log("detected 10");
//     continue
    
// }


//     console.log(element);
    
// }



// while and do while loop

let i = 0
while (i<=10) {
    console.log(i);
    i++
}
// array

const myarray1 =["rezwan","shaon","other"]

let myindex = 0

while (myindex < myarray1.length) {
    console.log(myarray1[myindex]);
myindex++
}

// 

do {
    let i = 0
    console.log(myarray1[i]);
    
} while (i <= myarray1.length );