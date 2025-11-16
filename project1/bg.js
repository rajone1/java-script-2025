console.log("Rezwan");

const btn = document.querySelectorAll(".button")

const body = document.querySelector("body")


btn.forEach(function (mybutton) {

    // console.log(mybutton);

mybutton.addEventListener("click", function(e){

// console.log(e);
// console.log(e.target);


if (e.target.id ==="red") {
    body.style.background = e.target.id}


})
    
});


