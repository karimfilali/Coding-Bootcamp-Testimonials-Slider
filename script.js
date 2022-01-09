const cards = document.querySelectorAll(".card")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slidesNumber = cards.length
let count = 0


function nextSlide(){
    cards[count].classList.remove("active")
    if(count < slidesNumber - 1) count++
    else count = 0
    cards[count].classList.add("active")
}

function prevSlide(){
    cards[count].classList.remove("active")
    if(count > 0) count--
    else count = slidesNumber - 1
    cards[count].classList.add("active")
}

prev.addEventListener("click", prevSlide)
next.addEventListener("click", nextSlide)