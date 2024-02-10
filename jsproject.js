let body = document.body;
console.dir(body);
let div = document.querySelector("div")


let redbtn = document.querySelector("#red")

let greenbtn = document.querySelector("#green")

let purplebtn = document.querySelector("#purple")

let orangebtn = document.querySelector("#orange")

redbtn.addEventListener("click", () => {

    body.style.backgroundColor ="red";
    div.style.border="red"
   

});

greenbtn.addEventListener("click", () => {

    body.style.backgroundColor ="green";
    div.style.border="green"
});

purplebtn.addEventListener("click", () => {

    body.style.backgroundColor ="purple";
    div.style.border="purple"
});
orangebtn.addEventListener("click", () => {

    body.style.backgroundColor ="orange";
    div.style.border="orange"
});
