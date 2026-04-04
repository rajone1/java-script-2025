// > < <= >=  , ==,===,!=,!==


if(2!=3){
console.log("executed");


}

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// ++++++++++++
const temperature2 = 500
const attribute= "he is hero"

if ( temperature2 > 100 ){

console.log("less than 50");
const add = "fly"
console.log(` he can ${add} , ${attribute}`);

} else {
    console.log("temperature is greater than 50");
}

const price = 1000

if (price<500) {
    console.log("less 500");

}
else if (price<700) {
    console.log("less 700");
}

else if (price<800) {
    console.log("less 800");
}


// && ||

const debitCard =true

const balanceIsSufficient= true

if (debitCard && balanceIsSufficient) {
 console.log("you can buy");   
}

const LogByGoogle = true
const LogByEmail = true
const logByOther = false
if (LogByGoogle || LogByEmail || logByOther) {
 console.log("logged in");   
}

// seitch

const monthchack = "april"
switch (monthchack) {
    case" jan":
        console.log("this is jan");
        break;
    case "feb":
        console.log("this is feb");
        break;
    case "march":
        console.log("this is march");
        break;
    case "april":
        console.log("this is april");
        break;

    default:
        break;
}



