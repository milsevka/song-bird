import birdsData from "./list.js";
import { tryPlay, falsePlay } from "./trueFalsePlay.js";
import getRandomIntInclusive from "./random.js";
import { style, defaultCounter } from "./header.js";

let arrBirds = document.querySelectorAll("#birds");
const buttonPlay = document.querySelector(".play");
const player = document.querySelector(".player");
let answerSong = document.querySelector(".answer-song");
let mainClick = document.querySelector(".answer-list");

let nameBird = document.querySelector(".answer-name-bird");
let nameEng = document.querySelector(".answer-name-eng");
let imgBird = document.querySelector(".answer-img");
let infoBird = document.querySelector(".answer-info");
let nameCur = document.querySelector(".current-name");
let imgCur = document.querySelector(".current-bird");
let next = document.querySelector(".button-next");

let meow = document.createElement("img");
let answer = document.querySelectorAll(".form-check");
let score = document.querySelector(".text-score");
let wrapperPopup = document.querySelector(".wrapper-popup");
let textPopup = document.querySelector(".popup-content");
let closePopup = document.querySelector(".close-popup");
let again = document.querySelector(".button-again");

let numberLevel = 0;
localStorage.setItem("numberLevel", numberLevel);
let deleteCheck;
let goNext = false;

let currentScore = 0;
let counterScore = 0;
let current = 0;
let counterWin = 0;
localStorage.setItem("winNumb", counterWin);
let numberBird;

let counterLevel = 0;
localStorage.setItem("countLevel", counterLevel);

let winner = false;

export default function check() {
  mainClick.addEventListener("click", (event) => {
    let target = event.target;
    if ((target.className = "form-check")) {
      answerSong.classList.add("answer-song-active");
      meow.className = "answer-img-photo";
      imgBird.append(meow);
      numberBird = target.id - 1;

      localStorage.setItem("check", numberBird);
      nameBird.innerHTML = birdsData[numberLevel][numberBird].name;
      infoBird.innerHTML = birdsData[numberLevel][numberBird].description;
      meow.src = birdsData[numberLevel][numberBird].image;
      nameEng.innerHTML = birdsData[numberLevel][numberBird].species;
      win();
    }
  });
}

next.addEventListener("click", () => {
  answerSong.classList.remove("answer-song-active");
  next.disabled = true;
  player.classList.add("playOn");
  counterLevel++;
  localStorage.setItem("countLevel", counterLevel);
  buttonPlay.classList.remove("pause");
  style();
  if (goNext && numberLevel <= 4) {
    numberLevel++;
    localStorage.setItem("numberLevel", numberLevel);
    nameCur.innerHTML = "******";
    imgCur.src =
      "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg";
    nameBird.innerHTML = "";
    infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
    nameEng.innerHTML = "";
    meow.remove();
    getRandomIntInclusive(0, 5);

    deleteCheck = localStorage.getItem("check");
    currentScore = 0;
    localStorage.setItem("score", currentScore);
    current = 0;
    counterWin = 0;
    localStorage.setItem("winNumb", counterWin);
    localStorage.removeItem("check");
    localStorage.removeItem("win");
    localStorage.removeItem("timePlay");
    localStorage.removeItem("timePlayCurrent");
    localStorage.removeItem("winner");
    winner = false;

    for (let i = 0; i < answer.length; i++) {
      let dot = document.createElement("span");
      dot.className = "form-check-input";

      answer[i].innerHTML = birdsData[numberLevel][i].name;
      answer[i].prepend(dot);
      answer[i].style.color = "";
    }

    next.classList.remove("button-next-active");
  } else {
    wrapperPopup.classList.add("open-popup");
    textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30. Жаль, это не максимальное количество. 
    Попробуйте еще раз!`;
    maxScore();
  }
});

function win() {
  deleteCheck = localStorage.getItem("check");
  let nowAns = localStorage.getItem("now");
  if (counterLevel === 5) {
    next.innerHTML = "Посмотреть результаты";
  }
  if (deleteCheck === nowAns) {
    counterWin = counterWin + 1;
    localStorage.setItem("winNumb", counterWin);
    goNext = true;
    winner = true;
    localStorage.setItem("winner", winner);
    localStorage.setItem("winnerNumber", nowAns);
    localStorage.setItem("win", goNext);
    next.classList.add("button-next-active");

    nameCur.innerHTML = birdsData[numberLevel][nowAns].name;
    imgCur.src = birdsData[numberLevel][nowAns].image;

    nameBird.innerHTML = birdsData[numberLevel][nowAns].name;
    infoBird.innerHTML = birdsData[numberLevel][nowAns].description;
    meow.src = birdsData[numberLevel][nowAns].image;
    nameEng.innerHTML = birdsData[numberLevel][nowAns].species;

    answer[deleteCheck].style.color = "#1c982c";

    next.disabled = false;
    changeScore();
    tryPlay();
  } else {
    falsePlay();
    if (!winner) {
      answer[deleteCheck].style.color = "rgb(224, 52, 52)";
      currentScore = currentScore - 1;
      localStorage.setItem("score", currentScore);
    }
  }
}

function changeScore() {
  let correctAnswer = localStorage.getItem("winNumb");
  if (winner && correctAnswer == 1) {
    current = localStorage.getItem("score");
    current = +current + +5;
    counterScore = counterScore + current;
    score.innerHTML = counterScore;
  }
}

closePopup.addEventListener("click", () => {
  wrapperPopup.classList.remove("open-popup");
});

function maxScore() {
  if (counterScore === +30) {
    textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30 и успешно прошли игру.
     Возможно, вам стоит стать орнитологом!`;
    again.classList.add("passive");
  }
}

again.addEventListener("click", () => {
  wrapperPopup.classList.remove("open-popup");
  nameCur.innerHTML = "******";
  imgCur.src = "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg";
  nameBird.innerHTML = "";
  infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
  nameEng.innerHTML = "";
  meow.remove();
  numberLevel = 0;
  localStorage.setItem("numberLevel", numberLevel);
  currentScore = 0;
  current = 0;
  counterWin = 0;
  winner = false;
  localStorage.setItem("winNumb", counterWin);
  defaultCounter();
  counterScore = 0;
  counterLevel = 0;
  score.innerHTML = counterScore;
  goNext = true;
  next.disabled = false;
  next.innerHTML = "Следующий вопрос";
  next.classList.remove("button-next-active");

  arrBirds[5].classList.remove("styleLevel");

  for (let i = 0; i < answer.length; i++) {
    answer[i].innerHTML = birdsData[numberLevel][i].name;
    answer[i].style.color = "";
  }

  reset();
  player.classList.add("playOn");
  buttonPlay.classList.remove("pause");
});

check();

function reset() {
  localStorage.removeItem("check");
  localStorage.removeItem("win");
  localStorage.removeItem("countLevel");
  localStorage.removeItem("score");
  localStorage.removeItem("timePlay");
  localStorage.removeItem("winner");
  localStorage.removeItem("winNumb");
}

reset();
