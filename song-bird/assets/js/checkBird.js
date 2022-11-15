import birdsData from "./list.js";
import birdsDataEn from "./listEn.js";
import birdsDataBy from "./listBlr.js";
import { tryPlay, falsePlay } from "./trueFalsePlay.js";
import getRandomIntInclusive from "./random.js";
import { style, defaultCounter } from "./header.js";


document.querySelectorAll(".form-lang-input").forEach(el => {
  el.checked = localStorage.getItem(el.id) === "true";
  el.onchange = () => localStorage.setItem(el.id, el.checked);
})

let arrBirds = document.querySelectorAll("#birds");
const buttonPlay = document.querySelector(".play");
const player = document.querySelector(".player");
let answerSong = document.querySelector(".answer-song");
let mainClick = document.querySelector(".answer-list");

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
let mainScore = document.querySelector(".name-score");
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

for (let i = 0; i < answer.length; i++) {
  if(document.getElementById("ru").checked) {
    answer[i].innerHTML = birdsData[numberLevel][i].name;
    infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
    next.innerHTML = "Следующий вопрос";
    mainScore.textContent = "Счёт:"
} else if ((document.getElementById("en").checked)) {
  answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
  infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
  next.innerHTML = "Next question";
  mainScore.textContent = "Score:";
} else if ((document.getElementById("be").checked)) {
  answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
  infoBird.innerHTML = "Паслухайце плэер. Выберыце птушку са спісу";
  next.innerHTML = "Наступнае пытанне";
  mainScore.textContent = "Рахунак:";
} 
}


export default function check() {
  mainClick.addEventListener("click", (event) => {
    let target = event.target;
    if ((target.className = "form-check")) {
      answerSong.classList.add("answer-song-active");
      meow.className = "answer-img-photo";
      imgBird.append(meow);
      numberBird = target.id - 1;

      localStorage.setItem("check", numberBird);
      if(document.getElementById("ru").checked) {
          nameBird.innerHTML = birdsData[numberLevel][numberBird].name;
          infoBird.innerHTML = birdsData[numberLevel][numberBird].description;
      } else if ((document.getElementById("en").checked)) {
        nameBird.innerHTML = birdsDataEn[numberLevel][numberBird].name;
        infoBird.innerHTML = birdsDataEn[numberLevel][numberBird].description;
      }
      else if ((document.getElementById("be").checked)) {
        nameBird.innerHTML = birdsDataBy[numberLevel][numberBird].name;
        infoBird.innerHTML = birdsDataBy[numberLevel][numberBird].description;
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
  if (goNext && numberLevel <= 4) {
    numberLevel++;
    localStorage.setItem("numberLevel", numberLevel);
    nameCur.innerHTML = "******";
    imgCur.src =
      "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg";
    nameBird.innerHTML = "";
    if(document.getElementById("ru").checked) {
      infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
  } else if ((document.getElementById("en").checked)) {
    infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
  } else if ((document.getElementById("be").checked)) {
    infoBird.innerHTML = "Паслухайце плэер. Выберыце птушку са спісу";
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

      if(document.getElementById("ru").checked) {
        answer[i].innerHTML = birdsData[numberLevel][i].name;
    } else if ((document.getElementById("en").checked)) {
      answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
    }
      
      answer[i].style.color = "";
    }

    next.classList.remove("button-next-active");
  } else {
    wrapperPopup.classList.add("open-popup");
    if(document.getElementById("ru").checked) {
      textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30. Жаль, это не максимальное количество. 
      Попробуйте еще раз!`;
  } else if ((document.getElementById("en").checked)) {
    textPopup.innerHTML = `Congratulations! You scored ${counterScore} points out of 30. Too bad that's not the maximum.
    Try again!`;
  } else if ((document.getElementById("be").checked)) {
    textPopup.innerHTML = `Віншуем! Вы набралі ${counterScore} балаў з 30. Шкада, гэта не максімальная колькасць.
    Паспрабуйце яшчэ раз!`;
  }
    
    maxScore();
  }
});

function win() {
  deleteCheck = localStorage.getItem("check");
  let nowAns = localStorage.getItem("now");
  if (counterLevel === 5) {
    if(document.getElementById("ru").checked) {
      next.innerHTML = "Посмотреть результаты";
  } else if ((document.getElementById("en").checked)) {
    next.innerHTML = "View results";
  } else if ((document.getElementById("be").checked)) {
    next.innerHTML = "Паглядзець вынікі";
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

    if(document.getElementById("ru").checked) {
      nameCur.innerHTML = birdsData[numberLevel][nowAns].name;
    imgCur.src = birdsData[numberLevel][nowAns].image;

    nameBird.innerHTML = birdsData[numberLevel][nowAns].name;
    infoBird.innerHTML = birdsData[numberLevel][nowAns].description;
    meow.src = birdsData[numberLevel][nowAns].image;
    nameEng.innerHTML = birdsData[numberLevel][nowAns].species;
    } else if ((document.getElementById("en").checked)) {
      nameCur.innerHTML = birdsDataEn[numberLevel][nowAns].name;
      imgCur.src = birdsDataEn[numberLevel][nowAns].image;
  
      nameBird.innerHTML = birdsDataEn[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsDataEn[numberLevel][nowAns].description;
      meow.src = birdsDataEn[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsDataEn[numberLevel][nowAns].species;
    } else if ((document.getElementById("be").checked)) {
      nameCur.innerHTML = birdsDataBy[numberLevel][nowAns].name;
      imgCur.src = birdsDataBy[numberLevel][nowAns].image;
  
      nameBird.innerHTML = birdsDataBy[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsDataBy[numberLevel][nowAns].description;
      meow.src = birdsDataBy[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsDataBy[numberLevel][nowAns].species;
    }

    

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
    if(document.getElementById("ru").checked) {
      textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30 и успешно прошли игру.
     Возможно, вам стоит стать орнитологом!`;
  } else if ((document.getElementById("en").checked)) {
    textPopup.innerHTML = `Congratulations! You scored ${counterScore} points out of 30 and successfully completed the game.
    Maybe you should become an ornithologist!`;
  } else if ((document.getElementById("be").checked)) {
    textPopup.innerHTML = `Віншуем! Вы набралі ${counterScore} балаў з 30 і паспяхова прайшлі гульню.
    Магчыма, вам варта стаць арнітолагам!`;
  }
    again.classList.add("passive");
  }
}

again.addEventListener("click", () => {
  wrapperPopup.classList.remove("open-popup");
  nameCur.innerHTML = "******";
  imgCur.src = "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg";
  nameBird.innerHTML = "";
  if(document.getElementById("ru").checked) {
    infoBird.innerHTML = "Послушайте плеер. Выберите птицу из списка";
    next.innerHTML = "Следующий вопрос";
} else if ((document.getElementById("en").checked)) {
  infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
  next.innerHTML = "Next question";
} else if ((document.getElementById("be").checked)) {
  infoBird.innerHTML = "Паслухайце плэер. Выберыце птушку са спісу";
  next.innerHTML = "Наступнае пытанне";
}
  
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
  
  next.classList.remove("button-next-active");

  arrBirds[5].classList.remove("styleLevel");

  for (let i = 0; i < answer.length; i++) {
    if(document.getElementById("ru").checked) {
      answer[i].innerHTML = birdsData[numberLevel][i].name;
  } else if ((document.getElementById("en").checked)) {
    answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
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
