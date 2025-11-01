
function first (){

console.log("hello function");


}

// first()

// 

function add (add1 ,add2){

adall = add1+add2
// console.log(adall);
return adall

}

const a = add(5,10)
// console.log(a);
// its give string
// console.log(`my all value print ${a}`); 

// getname === undefined  --ata r ata aki -- !getname


function getusername(getname){


    if(!getname){

console.log("input user name");
return
    }

return `${getname} well come`


}

// console.log(getusername("shaon"));

// sprade function


function usesprade(num1,num2 ,...num3){

return num3


}


console.log(usesprade(200,300,400,500));

// use function in object 


const myinfo ={

name:"Shaon",

id:21,
addresss:"raj"
}

function useobject (getvalue){

return(`my name is ${getvalue.name } id number ${getvalue.id}`);


}

// console.log(useobject(myinfo));

// i can use object diretly in parameter

// console.log(useobject(
// {name:"Rez",

// id:11,}

    
// ));



// +++++++



const myNewArray = [200, 400, 100, 600]


function getarray(arrayvalue){

return arrayvalue[0]

}

console.log(getarray(myNewArray));