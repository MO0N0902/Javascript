const boxClick1 = document.querySelector("#button1");
const boxClick2 = document.querySelector("#button2");
const boxClick3 = document.querySelector("#button3");
const boxClick4 = document.querySelector("#button4");


function changeBgRed(){
  boxClick1.setAttribute("style", "background-color:Red");
  console.log(this);
}
boxClick1.addEventListener("click", changeBgRed);

function changeBgYellow(){
  boxClick2.setAttribute("style", "background-color:Yellow");
  console.log(this);
}
boxClick2.addEventListener("click", changeBgYellow);

function changeBgGreen(){
  boxClick3.setAttribute("style", "background-color:green");
  console.log(this);
}
boxClick3.addEventListener("click", changeBgGreen);

function changeBgBlue(){
  boxClick4.setAttribute("style", "background-color:blue");
  console.log(this);
}
boxClick4.addEventListener("click", changeBgBlue);



