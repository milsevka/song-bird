import birdsData from "./list.js";
import birdsDataEn from "./listEn.js";
import birdsDataBy from "./listBlr.js";
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
let navList = document.querySelectorAll(".nav-text")

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
  if(localStorage.getItem("lang") == "ru") {
    answer[i].innerHTML = birdsData[numberLevel][i].name;
    infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
    next.innerHTML = "Следующий вопрос";
    mainScore.textContent = "Счёт:"
} else if (localStorage.getItem("lang") == "en") {
  answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
  infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
  next.innerHTML = "Next question";
  mainScore.textContent = "Score:";
} else if (localStorage.getItem("lang") == "be") {
  answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
  infoBird.innerHTML = "Паслухайце плэер. Выберыце птушку са спісу";
  next.innerHTML = "Наступнае пытанне";
  mainScore.textContent = "Рахунак:";
} 
}


  if(localStorage.getItem("lang") == "ru") {
    arrBirds[0].innerHTML = "Разминка";
    arrBirds[1].innerHTML = "Воробьиные";
    arrBirds[2].innerHTML = "Лесные птицы";
    arrBirds[3].innerHTML = "Певчие птицы";
    arrBirds[4].innerHTML = "Хищные птицы";
    arrBirds[5].innerHTML = "Морские птицы";
    navList[0].innerHTML = "Главная";
    navList[1].innerHTML = "Викторина";
    navList[2].innerHTML = "Галерея";
} else if (localStorage.getItem("lang") == "en") {
  arrBirds[0].innerHTML = "Different";
  arrBirds[1].innerHTML = "Sparrows";
  arrBirds[2].innerHTML = "Forest birds";
  arrBirds[3].innerHTML = "Songbirds";
  arrBirds[4].innerHTML = "Predator birds";
  arrBirds[5].innerHTML = "Sea birds";
  navList[0].innerHTML = "Нome";
    navList[1].innerHTML = "Quiz";
    navList[2].innerHTML = "Gallery";
} else if (localStorage.getItem("lang") == "be") {
  arrBirds[0].innerHTML = "Размінка";
  arrBirds[1].innerHTML = "Вераб'іныя";
  arrBirds[2].innerHTML = "Лясныя птушкі";
  arrBirds[3].innerHTML = "Пявучыя птушкі";
  arrBirds[4].innerHTML = "Драпежныя птушкі";
  arrBirds[5].innerHTML = "Марскія птушкі";
  navList[0].innerHTML = "Галоўная";
    navList[1].innerHTML = "Віктарына";
    navList[2].innerHTML = "Галерэя";
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
      if(localStorage.getItem("lang") == "ru") {
          nameBird.innerHTML = birdsData[numberLevel][numberBird].name;
          infoBird.innerHTML = birdsData[numberLevel][numberBird].description;
      } else if (localStorage.getItem("lang") == "en") {
        nameBird.innerHTML = birdsDataEn[numberLevel][numberBird].name;
        infoBird.innerHTML = birdsDataEn[numberLevel][numberBird].description;
      }
      else if (localStorage.getItem("lang") == "be") {
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
      "../../assets/images/pngwing.com (1).png";
    nameBird.innerHTML = "";
    if(localStorage.getItem("lang") == "ru") {
      infoBird.innerHTML = "Послушайте плеер.Выберите птицу из списка";
  } else if (localStorage.getItem("lang") == "en") {
    infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
  } else if (localStorage.getItem("lang") == "be") {
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

      if(localStorage.getItem("lang") == "ru") {
        answer[i].innerHTML = birdsData[numberLevel][i].name;
    } else if (localStorage.getItem("lang") == "en") {
      answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
    } else if (localStorage.getItem("lang") == "be") {
      answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
    }
      
      answer[i].style.color = "";
    }

    next.classList.remove("button-next-active");
  } else {
    wrapperPopup.classList.add("open-popup");
    if(localStorage.getItem("lang") == "ru") {
      textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30. Жаль, это не максимальное количество. 
      Попробуйте еще раз!`;
      again.innerHTML = "Попробовать еще раз";
  } else if (localStorage.getItem("lang") == "en") {
    textPopup.innerHTML = `Congratulations! You scored ${counterScore} points out of 30. Too bad that's not the maximum.
    Try again!`;
    again.innerHTML = "To try one more time";
  } else if (localStorage.getItem("lang") == "be") {
    textPopup.innerHTML = `Віншуем! Вы набралі ${counterScore} балаў з 30. Шкада, гэта не максімальная колькасць.
    Паспрабуйце яшчэ раз!`;
    again.innerHTML = "Паспрабаваць яшчэ раз";
  }
    
    maxScore();
  }
});

function win() {
  deleteCheck = localStorage.getItem("check");
  let nowAns = localStorage.getItem("now");
  if (counterLevel === 5) {
    if(localStorage.getItem("lang") == "ru") {
      next.innerHTML = "Посмотреть результаты";
  } else if (localStorage.getItem("lang") == "en") {
    next.innerHTML = "View results";
  } else if (localStorage.getItem("lang") == "be") {
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

    if(localStorage.getItem("lang") == "ru") {
      nameCur.innerHTML = birdsData[numberLevel][nowAns].name;
    imgCur.src = birdsData[numberLevel][nowAns].image;

    nameBird.innerHTML = birdsData[numberLevel][nowAns].name;
    infoBird.innerHTML = birdsData[numberLevel][nowAns].description;
    meow.src = birdsData[numberLevel][nowAns].image;
    nameEng.innerHTML = birdsData[numberLevel][nowAns].species;
    } else if (localStorage.getItem("lang") == "en") {
      nameCur.innerHTML = birdsDataEn[numberLevel][nowAns].name;
      imgCur.src = birdsDataEn[numberLevel][nowAns].image;
  
      nameBird.innerHTML = birdsDataEn[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsDataEn[numberLevel][nowAns].description;
      meow.src = birdsDataEn[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsDataEn[numberLevel][nowAns].species;
    } else if (localStorage.getItem("lang") == "be") {
      nameCur.innerHTML = birdsDataBy[numberLevel][nowAns].name;
      imgCur.src = birdsDataBy[numberLevel][nowAns].image;
  
      nameBird.innerHTML = birdsDataBy[numberLevel][nowAns].name;
      infoBird.innerHTML = birdsDataBy[numberLevel][nowAns].description;
      meow.src = birdsDataBy[numberLevel][nowAns].image;
      nameEng.innerHTML = birdsDataBy[numberLevel][nowAns].species;
    }

    

    answer[deleteCheck].style.color = "rgb(22 177 42)";

    next.disabled = false;
    changeScore();
    tryPlay();
  } else {
    falsePlay();
    if (!winner) {
      answer[deleteCheck].style.color = "rgb(137 39 39)";
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
    if(localStorage.getItem("lang") == "ru") {
      textPopup.innerHTML = `Поздравляем! Вы набрали ${counterScore} баллов из 30 и успешно прошли игру.
     Возможно, вам стоит стать орнитологом!`;
  } else if (localStorage.getItem("lang") == "en") {
    textPopup.innerHTML = `Congratulations! You scored ${counterScore} points out of 30 and successfully completed the game.
    Maybe you should become an ornithologist!`;
  } else if (localStorage.getItem("lang") == "be") {
    textPopup.innerHTML = `Віншуем! Вы набралі ${counterScore} балаў з 30 і паспяхова прайшлі гульню.
    Магчыма, вам варта стаць арнітолагам!`;
  }
    again.classList.add("passive");
  }
}

again.addEventListener("click", () => {
  wrapperPopup.classList.remove("open-popup");
  nameCur.innerHTML = "******";
  imgCur.src = "../../assets/images/pngwing.com (1).png";
  nameBird.innerHTML = "";
  if(localStorage.getItem("lang") == "ru") {
    infoBird.innerHTML = "Послушайте плеер. Выберите птицу из списка";
    next.innerHTML = "Следующий вопрос";
} else if (localStorage.getItem("lang") == "en") {
  infoBird.innerHTML = "Listen to the player. Choose a bird from the list";
  next.innerHTML = "Next question";
} else if (localStorage.getItem("lang") == "be") {
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
    if(localStorage.getItem("lang") == "ru") {
      answer[i].innerHTML = birdsData[numberLevel][i].name;
  } else if (localStorage.getItem("lang") == "en") {
    answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
  } else if (localStorage.getItem("lang") == "be") {
    answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
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
