
let letsgo = document.querySelector(".button-play")

 function lang() {
  document.querySelectorAll(".form-lang-input").forEach(el => {
    el.onchange = () => localStorage.setItem("lang", el.id);
  //  el.checked = localStorage.getItem(el.id) === "true";
  })
}

letsgo.addEventListener('click', lang())

localStorage.removeItem("en")
localStorage.removeItem("be")
localStorage.removeItem("ru")