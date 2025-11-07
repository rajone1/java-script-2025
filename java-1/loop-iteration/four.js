
// map

const ary1 = [1,2,3,4,5,6,7,8,9,10]

const get = ary1.map((item)=>  item +2)
// console.log(get);

// nesting aktar vatora abr map o filter add korta parbo

const ary2 = [1,2,3,4,5,6,7,8,9,10]

const get2 = ary2.
   map((item)=>{
   return item *10})

   .map((i)=>{
return i+2})
.filter((j)=> j>= 100)
// console.log(get2);


// reduce
// structutre
// const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10


// 


const ar1 = [1,2,3]

const add = ar1.reduce((acc,curval)=>{

    return acc+curval



} ,0)

console.log(add);

// use object in arry

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const addall = shoppingCart.reduce((acc,curval)=>{

return acc+curval.price

},0)
console.log(addall);