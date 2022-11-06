import birdsData from "./list.js";
import { music, updateProgress, setUpdate, clickProgress } from "./play.js";
import getRandomIntInclusive from './random.js';

let allBirds = document.querySelectorAll(".form-check-input");
let nameBird = document.querySelector(".answer-name-bird");
let nameEng = document.querySelector(".answer-name-eng");
let imgBird = document.querySelector(".answer-img");
let infoBird = document.querySelector(".answer-info");
let nameCur = document.querySelector(".current-name");
let imgCur = document.querySelector(".current-bird");
let next = document.querySelector(".button-next");
let woof = false;
let meow = document.createElement("img");
let answer = document.querySelectorAll(".form-check-label");




let counter = 0;
let deleteCheck;




export default function check() {

  document.querySelector(".parent-answer").addEventListener("click", () => {
    if (!woof) {
      meow.className = "answer-img-photo";
      imgBird.append(meow);
    }
    for (let i = 0; i < allBirds.length; i++) {  
      if (allBirds[i].checked) {
        localStorage.setItem("check", i);
        win()
        nameBird.innerHTML = birdsData[counter][i].name;
        infoBird.innerHTML = birdsData[counter][i].description;
        meow.src = birdsData[counter][i].image;
        nameEng.innerHTML = birdsData[counter][i].species;
        woof = true;
      }
    }
   
  });
 
}

next.addEventListener("click", () => {
  counter++;
  nameCur.innerHTML = "******";
  imgCur.src = "../../assets/images/pngwing.com.png";
  nameBird.innerHTML = "";
  infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
  nameEng.innerHTML = "";
  meow.remove();
  getRandomIntInclusive(0,5)
  music;
  updateProgress;
  setUpdate;
  clickProgress;
  woof = false;
 

  deleteCheck = localStorage.getItem("check")
  allBirds[deleteCheck].checked = false;
  localStorage.removeItem('check')
  for (let i = 0; i < answer.length; i++) {
    answer[i].innerHTML = birdsData[counter][i].name;
  }
});

function win() {
  deleteCheck = localStorage.getItem("check")
  let nowAns = localStorage.getItem("now");
  if (deleteCheck === nowAns) {
    nameCur.innerHTML = birdsData[counter][deleteCheck].name;
    imgCur.src = birdsData[counter][deleteCheck].image;
  } else {
    console.log('noow')
  }
}



check();


localStorage.removeItem('check')
