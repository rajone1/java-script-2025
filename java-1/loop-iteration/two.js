
// for of

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

for (const [key , value] of map1) {
    console.log(`${key} :- ${value}`);
}

