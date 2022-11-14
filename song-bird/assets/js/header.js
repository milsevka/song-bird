let arrBirds = document.querySelectorAll("#birds");

let counter = 0;

export function defaultCounter() {
  arrBirds[0].classList.add("styleLevel");
}
export function style() {
  counter = localStorage.getItem("countLevel");
  if (counter <= 5) {
    arrBirds[counter].classList.add("styleLevel");
    arrBirds[counter - 1].classList.remove("styleLevel");
  }
}

window.onload = defaultCounter;
