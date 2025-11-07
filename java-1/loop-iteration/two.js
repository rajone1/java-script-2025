
// for of 
// 1 . for of loop sora sori value dai , r object r value sora sori nita parbona nila map use korta hoba. 
// array value neta hola for of babohar korbo

//  2.for in loop sora sori key dai
// object a babohar hoi basi


const array = [1,2,3,4,5,6,7,8]

// for (const i of array) {
//     console.log(i);
// }

const myname = "Rezwan ahommed"

// for (const name of myname) {
//     console.log(name);
// }
// 


const myobject = {
name :"rezwan",
id :"123"

}
// for of object sora sori babohar kora jaina map use korta hoi
// for (const a of myobject ) {
//     console.log(a);
// }
// us map

const map1 = new Map()

map1.set("name","shaon")
map1.set("address","rajshahi")

// for (const key of map1) {
//     console.log(key);
// }
// we can get key and value

// for (const [key , value] of map1) {
//     console.log(`${key} :- ${value}`);
// }

// for in loop
// sora sori value na dea key dai
const myobject2 = {
name :"rezwan",
id :"123"

}

for (const key in myobject2) {
   
// console.log(key);
// console.log(myobject2[key]);
    
}


// 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   
    // console.log(key);
    console.log(programming[key]);
    
}
