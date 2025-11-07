// use foreach loop



const programming1 = ["js", "rb", "py", "java", "cpp"]

programming1.forEach(function(item){
    
    
    // console.log(item);
    
})
// normal function , const name = function function name(){}
// use arrow function

// const name = ()=>{} akhana  variable name use korcena because variabl store korta hobana

// value.forEach( ( parameter)=> {condition and other }  )

const programming2 = ["js", "rb", "py", "java", "cpp"]

programming2.forEach((item)=>{
    
    
    // console.log(item);
})

// foreach parameter sudhu item na aro daoa jai (item,indexnumber , array)

programming2.forEach((item, index , ar)=>{
    
    
    // console.log(item,index,ar);
})



// function alada thaklao use kotrta prbo
const programming3= ["js", "c++", "py", "java"]

function myname (name){

// console.log(name);
}
programming3.forEach(myname)

// i can use all array value

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((item)=>{

// console.log(item.languageName);

})

// i can not use store variable in forEach loop ,its shows undefind dont give value .we can use filter

const programming4= ["js", "c++", "py", "java"]

const myvalue = programming4.forEach((item)=>{
console.log(item);

})
console.log(myvalue);


// use filter 1.condition thakbe (true or false) 2. return deba

const myarray3 =[1,2,3,4,5,6,7,8,9,10]

const usefilter1 = myarray3.filter((item)=>(item>=5 ))
// or
const usefilter2 = myarray3.filter((item)=>{
return item>=5

})
// console.log(usefilter1);
// console.log(usefilter2);

// use more  info



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1999, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myinfo = books.filter((item)=>{
return item.publish <= 2000

  })
  console.log(myinfo);
  

  let userBooks = books.filter((item)=>{
return item.publish === 1999 && item.genre ==="History"

  })
//   console.log(userBooks);
