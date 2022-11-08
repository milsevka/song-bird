import birdsData from "./list.js";
import { music, updateProgress, setUpdate, clickProgress } from "./play.js";
import getRandomIntInclusive from "./random.js";
import style from './header.js'


const buttonPlay = document.querySelector(".play");
const player = document.querySelector(".player");
let mainClick = document.querySelector(".divcont")
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
let answer = document.querySelectorAll(".form-check");
let score = document.querySelector(".score");
let wrapperPopup = document.querySelector(".wrapper_popup");
let textPopup = document.querySelector(".feedback_cardpop")
let closePopup = document.querySelector(".close_popup")
let arrayAnswer = document.querySelector(".parent-answer")

let counter = 0;
let deleteCheck;
let goNext = false;

let currentScore = 0;
let counterScore = 0;
let current = 0;

let numberBird;

let counterLevel = 0;
localStorage.setItem("countLevel", counterLevel)

export default function check() {
  mainClick.addEventListener("click", (event) => {
  let target = event.target;
 
  if (target.className = "form-check") {
    
  
      meow.className = "answer-img-photo";
      imgBird.append(meow);
      numberBird = target.id - 1

        localStorage.setItem("check", numberBird);
         nameBird.innerHTML = birdsData[counter][numberBird].name;
        infoBird.innerHTML = birdsData[counter][numberBird].description;
        meow.src = birdsData[counter][numberBird].image;
        nameEng.innerHTML = birdsData[counter][numberBird].species;
        woof = true;
         win();
       } 
  //   }
  // } else {
  //   console.log('now');
  // }
 });
}


next.addEventListener("click", () => {
  player.classList.add("meow");
  counterLevel++
  localStorage.setItem("countLevel", counterLevel);
  buttonPlay.classList.remove("pause");
  style();
  if (goNext && counter<= 4) {
    counter++;
    nameCur.innerHTML = "******";
    imgCur.src =
      "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg";
    nameBird.innerHTML = "";
    infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
    nameEng.innerHTML = "";
    meow.remove();
    getRandomIntInclusive(0, 5);
    music;
    updateProgress;
    setUpdate;
    clickProgress;
    
    woof = false;
    deleteCheck = localStorage.getItem("check");
    currentScore = 0;
    localStorage.setItem("score" , currentScore)
    current = 0;
  
    for (let x = 0; x < allBirds.length; x++) {
      allBirds[x].checked = false;
      answer[x].classList.remove("bad-answer");
    }

    localStorage.removeItem("check");
    localStorage.removeItem("win");

    for (let i = 0; i < answer.length; i++) {
      answer[i].innerHTML = birdsData[counter][i].name;
      answer[i].style.color = "";
    }

    next.classList.remove("button-next-active");
  } else {
    wrapperPopup.classList.add("open-popup");
    textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30. Жаль, это не максимальное количество. 
    Попробуйте еще раз!`
  }
});


function win() {

  deleteCheck = localStorage.getItem("check");
  let nowAns = localStorage.getItem("now");
  if(counterLevel === 5) {
    next.innerHTML = "Посмотреть результаты";
  }
  if (deleteCheck === nowAns) { 
    
    goNext = true;
    localStorage.setItem("win", goNext);
    next.classList.add("button-next-active");
   
    nameCur.innerHTML = birdsData[counter][nowAns].name;
    imgCur.src = birdsData[counter][nowAns].image;

    nameBird.innerHTML = birdsData[counter][nowAns].name;
    infoBird.innerHTML = birdsData[counter][nowAns].description;
    meow.src = birdsData[counter][nowAns].image;
    nameEng.innerHTML = birdsData[counter][nowAns].species;
   
    answer[deleteCheck].style.color = "green";
    allBirds[deleteCheck].style.backgroundColor = "green";
    changeScore();
  
  } else {
    answer[deleteCheck].classList.add("bad-answer");
    allBirds[deleteCheck].style.backgroundColor = "rgb(167, 82, 82)";
    currentScore = currentScore -1
    localStorage.setItem("score", currentScore)
  }
}


function changeScore() {
  current = localStorage.getItem("score")
  current = +current + +5;
  counterScore = counterScore + current;
  score.innerHTML = counterScore;
  if(counterScore === 30) {
    textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30 и успешно прошли игру.
     Возможно, вам стоит стать орнитологом!`
  }
}

closePopup.addEventListener("click" , () => {
  wrapperPopup.classList.remove("open-popup");
})



check();

localStorage.removeItem("check");
localStorage.removeItem("win");
 localStorage.removeItem("countLevel");
 localStorage.removeItem("score");
