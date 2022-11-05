import birdsData from "./list.js";

let allBirds = document.querySelectorAll(".form-check-input");
let nameBird = document.querySelector(".answer-name-bird");
let nameEng = document.querySelector(".answer-name-eng");
let imgBird = document.querySelector(".answer-img");
let infoBird = document.querySelector(".answer-info-text");
let nameCur = document.querySelector(".current-name");
let imgCur = document.querySelector(".current-bird");
let next = document.querySelector(".button-next");
let woof = false;
let meow = document.createElement("img");
let answer = document.querySelectorAll(".form-check-label");

let counter = 0;

next.addEventListener("click", () => {
  counter++;
  nameCur.innerHTML = "******"
  imgCur.src = "../../assets/images/pngwing.com.png";
  nameBird.innerHTML = ""
  infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
  nameEng.innerHTML = "";
  meow.remove();
  woof = false;
  let deleteCheck = localStorage.getItem("check")
  allBirds[deleteCheck].checked = false;
  for (let i = 0; i < answer.length; i++) {
    answer[i].innerHTML = birdsData[counter][i].name;
  }
});

export default function check() {
  document.querySelector(".parent-answer").addEventListener("click", () => {
    if (!woof) {
      meow.className = "answer-img-photo";
      imgBird.append(meow);
    }
    for (let i = 0; i < allBirds.length; i++) {
      if (allBirds[i].checked) {
        nameCur.innerHTML = birdsData[counter][i].name;
        imgCur.src = birdsData[counter][i].image;
        nameBird.innerHTML = birdsData[counter][i].name;
        infoBird.innerHTML = birdsData[counter][i].description;
        meow.src = birdsData[counter][i].image;
        nameEng.innerHTML = birdsData[counter][i].species;
        woof = true;
        localStorage.setItem("check", i)
      }
    }
  });
}

check();
