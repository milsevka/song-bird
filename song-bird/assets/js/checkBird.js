import birdsData from "./list.js";
import birdsDataEn from "./listEn.js";
import birdsDataBy from "./listBlr.js";
import { tryPlay, falsePlay } from "./trueFalsePlay.js";
import getRandomIntInclusive from "./random.js";
import { style, defaultCounter } from "./header.js";

let arr = [];

let arrBirds = document.querySelectorAll("#birds");
const buttonPlay = document.querySelector(".play");
const player = document.querySelector(".player");
let answerSong = document.querySelector(".answer-song");
let mainClick = document.querySelector(".answer-list");
let questionCont = document.querySelector(".current-questions");
let answerCont = document.querySelector(".answer");

let nameBird = document.querySelector(".answer-name-bird");
let nameEng = document.querySelector(".answer-name-eng");
let imgBird = document.querySelector(".answer-img");
let infoBird = document.querySelector(".answer-info-text");
let nameCur = document.querySelector(".current-name");
let imgCur = document.querySelector(".current-bird");
let next = document.querySelector(".button-next");

let meow = document.createElement("img");
let answer = document.querySelectorAll(".form-check");
let score = document.querySelector(".text-score");
let again = document.querySelector(".button-again");
let navList = document.querySelectorAll(".nav-text");
let gameOver = document.querySelector(".game-over");
let gameOverText = document.querySelector(".game-over-text");

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
      switch (localStorage.getItem("lang")) {
        case 'ru':
        nameBird.innerHTML = birdsData[numberLevel][numberBird].name;
        infoBird.innerHTML = birdsData[numberLevel][numberBird].description;
        break;
        case 'en': 
        nameBird.innerHTML = birdsDataEn[numberLevel][numberBird].name;
        infoBird.innerHTML = birdsDataEn[numberLevel][numberBird].description;
        break;
        case 'be': 
        nameBird.innerHTML = birdsDataBy[numberLevel][numberBird].name;
        infoBird.innerHTML = birdsDataBy[numberLevel][numberBird].description;
        break;
      }
    
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
  arr.length = 0;
  if (goNext && numberLevel <= 4) {
    numberLevel++;
    localStorage.setItem("numberLevel", numberLevel);
    nameCur.innerHTML = "******";
    imgCur.src = "../../assets/images/pngwing.com (1).png";
    nameBird.innerHTML = "";
    switch (localStorage.getItem("lang")) {
      case 'ru':
      infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
      break;
      case 'en': 
      infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
      break;
      case 'be': 
      infoBird.innerHTML = "Паслухайце плэер. Выберыце птушку са спісу";
      break;
      default: 
      infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
    }
   
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
      switch (localStorage.getItem("lang")) {
        case 'ru':
        answer[i].innerHTML = birdsData[numberLevel][i].name;
        break;
        case 'en': 
        answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
        break;
        case 'be': 
        answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
        break;
        default: 
        answer[i].innerHTML = birdsData[numberLevel][i].name;
      }
      
     
      answer[i].style.color = "";
    }

    next.classList.remove("button-next-active");
  } else {
    questionCont.style.display = "none";
    answerCont.style.display = "none";
    gameOver.style.display = "block";
    switch (localStorage.getItem("lang")) {
      case 'ru':
        gameOverText.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30. Жаль, это не максимальное количество. 
        Попробуйте еще раз!`;
        again.innerHTML = "Попробовать еще раз";
      break;
      case 'en': 
      gameOverText.innerHTML = `Congratulations! You scored ${counterScore} points out of 30. Too bad that's not the maximum.
    Try again!`;
      again.innerHTML = "To try one more time";
      break;
      case 'be': 
      gameOverText.innerHTML = `Віншуем! Вы набралі ${counterScore} балаў з 30. Шкада, гэта не максімальная колькасць.
      Паспрабуйце яшчэ раз!`;
        again.innerHTML = "Паспрабаваць яшчэ раз";
      break;
      default: 
      gameOverText.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30. Жаль, это не максимальное количество. 
        Попробуйте еще раз!`;
      again.innerHTML = "Попробовать еще раз";
    }
   

    maxScore();
  }
});

function win() {
  deleteCheck = localStorage.getItem("check");
  let nowAns = localStorage.getItem("now");
 
  if (counterLevel === 5) {
    switch (localStorage.getItem("lang")) {
      case 'ru':
        next.innerHTML = "Посмотреть результаты";
      break;
      case 'en': 
      next.innerHTML = "View results";
      break;
      case 'be': 
      next.innerHTML = "Паглядзець вынікі";
      break;
      default: 
      next.innerHTML = "Посмотреть результаты";
    }
    
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
    switch (localStorage.getItem("lang")) {
      case 'ru':
      nameCur.innerHTML = birdsData[numberLevel][nowAns].name;
      imgCur.src = birdsData[numberLevel][nowAns].image;

      nameBird.innerHTML = birdsData[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsData[numberLevel][nowAns].description;
      meow.src = birdsData[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsData[numberLevel][nowAns].species;
      break;
      case 'en': 
      nameCur.innerHTML = birdsDataEn[numberLevel][nowAns].name;
      imgCur.src = birdsDataEn[numberLevel][nowAns].image;

      nameBird.innerHTML = birdsDataEn[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsDataEn[numberLevel][nowAns].description;
      meow.src = birdsDataEn[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsDataEn[numberLevel][nowAns].species;
      break;
      case 'be': 
      nameCur.innerHTML = birdsDataBy[numberLevel][nowAns].name;
      imgCur.src = birdsDataBy[numberLevel][nowAns].image;

      nameBird.innerHTML = birdsDataBy[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsDataBy[numberLevel][nowAns].description;
      meow.src = birdsDataBy[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsDataBy[numberLevel][nowAns].species;
      break;
      default: 
      nameCur.innerHTML = birdsData[numberLevel][nowAns].name;
      imgCur.src = birdsData[numberLevel][nowAns].image;

      nameBird.innerHTML = birdsData[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsData[numberLevel][nowAns].description;
      meow.src = birdsData[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsData[numberLevel][nowAns].species;
    }
  
    answer[deleteCheck].style.color = "rgb(19 97 29)";
    next.disabled = false;
    changeScore();
    tryPlay();
  } else {
    falsePlay();
    if (!winner) {
      answer[deleteCheck].style.color = "rgb(137 39 39)";
      checkArray();
    }
  }
  function checkArray() {
    if (!arr.includes(answer[deleteCheck].id)) {
      arr.push(answer[deleteCheck].id);
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

function maxScore() {
  if (counterScore === +30) {
    questionCont.style.display = "none";
    answerCont.style.display = "none";
    gameOver.style.display = "block";
    switch (localStorage.getItem("lang")) {
      case 'ru':
        gameOverText.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30 и успешно прошли игру.
        Возможно, вам стоит стать орнитологом!`;
      break;
      case 'en': 
      gameOverText.innerHTML= `Congratulations! You scored ${counterScore} points out of 30 and successfully completed the game.
       Maybe you should become an ornithologist!`;
      break;
      case 'be': 
      gameOverText.innerHTML = `Віншуем! Вы набралі ${counterScore} балаў з 30 і паспяхова прайшлі гульню.
       Магчыма, вам варта стаць арнітолагам!`;
      break;
      default: 
      gameOverText.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30 и успешно прошли игру.
        Возможно, вам стоит стать орнитологом!`;
    }
    
    again.classList.add("passive");
  }
}

again.addEventListener("click", () => {
  questionCont.style.display = "block";
  answerCont.style.display = "block";
  gameOver.style.display = "none";
  nameCur.innerHTML = "******";
  imgCur.src = "../../assets/images/pngwing.com (1).png";
  nameBird.innerHTML = "";
  switch (localStorage.getItem("lang")) {
    case 'ru':
      infoBird.innerHTML = "Послушайте плеер. Выберите птицу из списка";
      next.innerHTML = "Следующий вопрос";
    break;
    case 'en': 
    infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
       next.innerHTML = "Next question";
    break;
    case 'be': 
    infoBird.innerHTML = "Паслухайце плэер. Выберыце птушку са спісу";
    next.innerHTML = "Наступнае пытанне";
    break;
    default: 
    infoBird.innerHTML = "Послушайте плеер. Выберите птицу из списка";
    next.innerHTML = "Следующий вопрос";
  }
 

  nameEng.innerHTML = "";
  meow.remove();
  numberLevel = 0;
  localStorage.setItem("numberLevel", numberLevel);
  currentScore = 0;
  current = 0;
  counterWin = 0;
  winner = false;
  arr.length = 0;
  localStorage.setItem("winNumb", counterWin);
  defaultCounter();
  counterScore = 0;
  counterLevel = 0;
  score.innerHTML = counterScore;
  goNext = true;
  next.disabled = false;

  next.classList.remove("button-next-active");

  arrBirds[5].classList.remove("styleLevel");

  for (let i = 0; i < answer.length; i++) {
    switch (localStorage.getItem("lang")) {
      case 'ru':
        answer[i].innerHTML = birdsData[numberLevel][i].name;
      break;
      case 'en': 
        answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
      break;
      case 'be': 
        answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
      break;
      default: 
      answer[i].innerHTML = birdsData[numberLevel][i].name;
    }
   
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
