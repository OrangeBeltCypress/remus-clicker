const char = document.querySelector(".char")
const clicks = document.querySelector(".clicks")


let amount = 0;


char.addEventListener("mousedown", ()=>{
    amount++
    clicks.innerHTML = "BETTER START RUNNING: " + amount
    char.style.transform = "scale(1.1)"
})


char.addEventListener("mouseup", ()=>{
    char.style.transform = "scale(1)"
})