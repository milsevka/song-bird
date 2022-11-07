let arrBirds = document.querySelectorAll("#diff-birds")

let next = document.querySelector(".button-next");

let counter = 0;

function defaultCounter() {
    arrBirds[0].classList.add("styleLevel")
}
export default function style() {
        counter = localStorage.getItem("countLevel")
        if (counter<=5) {
            arrBirds[counter].classList.add("styleLevel")
            arrBirds[counter-1].classList.remove("styleLevel")  
        }
}



window.onload = defaultCounter;

