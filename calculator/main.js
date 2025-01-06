const display = document.getElementById("display");
let moon = document.getElementById("moon")
let sun = document.getElementById("sun");
let body = document.getElementById("bodi");
let resetBtn = document.querySelector(".resetBtn")



moon.addEventListener("click",()=>{
  moon.style.display = "none";
  sun.style.display = "block";
  display.style.backgroundColor = "white";
  display.style.color = "black";
  body.style.backgroundColor = "black";

  
})

sun.addEventListener("click", () => {
  moon.style.display = "block";
  sun.style.display = "none";
   body.style.backgroundColor = "white";
   display.style.backgroundColor = "black";
   display.style.color = "white";
 
   
});


function btnDisplay(number) {
  display.value += number;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

function reset() {
  display.value = " ";
}

function clearing() {
  display.value = display.value.slice(0, -1);
}
