import birdsData from "./list.js";
import birdsDataEn from "./listEn.js";
import birdsDataBy from "./listBlr.js";
let arrBirds = document.querySelectorAll("#birds");
let infoBird = document.querySelector(".answer-info-text");
let next = document.querySelector(".button-next");
let answer = document.querySelectorAll(".form-check");
let mainScore = document.querySelector(".name-score");
let navList = document.querySelectorAll(".nav-text");
let numberLevel = 0;
localStorage.setItem("numberLevel", numberLevel);

export default function translateQ() {
  for (let i = 0; i < answer.length; i++) {
    switch (localStorage.getItem("lang")) {
      case "ru":
        answer[i].innerHTML = birdsData[numberLevel][i].name;
        infoBird.innerHTML = "Послушайте плеер. <br> Выберите птицу из списка";
        next.innerHTML = "Следующий вопрос";
        mainScore.textContent = "Счёт:";
        break;
      case "en":
        answer[i].innerHTML = birdsDataEn[numberLevel][i].name;
        infoBird.innerHTML =
          "Listen to the player.<br> Choose a bird from the list";
        next.innerHTML = "Next question";
        mainScore.textContent = "Score:";
        break;
      case "be":
        answer[i].innerHTML = birdsDataBy[numberLevel][i].name;
        infoBird.innerHTML = "Паслухайце плэер.<br>Выберыце птушку са спісу.";
        next.innerHTML = "Наступнае пытанне";
        mainScore.textContent = "Рахунак:";
        break;
    }
  }
  switch (localStorage.getItem("lang")) {
    case "ru":
      arrBirds[0].innerHTML = "Разминка";
      arrBirds[1].innerHTML = "Воробьиные";
      arrBirds[2].innerHTML = "Лесные птицы";
      arrBirds[3].innerHTML = "Певчие птицы";
      arrBirds[4].innerHTML = "Хищные птицы";
      arrBirds[5].innerHTML = "Морские птицы";
      navList[0].innerHTML = "Главная";
      navList[1].innerHTML = "Викторина";
      navList[2].innerHTML = "Галерея";
      break;
    case "en":
      arrBirds[0].innerHTML = "Different";
      arrBirds[1].innerHTML = "Sparrows";
      arrBirds[2].innerHTML = "Forest birds";
      arrBirds[3].innerHTML = "Songbirds";
      arrBirds[4].innerHTML = "Predator birds";
      arrBirds[5].innerHTML = "Sea birds";
      navList[0].innerHTML = "Нome";
      navList[1].innerHTML = "Quiz";
      navList[2].innerHTML = "Gallery";
      break;
    case "be":
      arrBirds[0].innerHTML = "Размінка";
      arrBirds[1].innerHTML = "Вераб'іныя";
      arrBirds[2].innerHTML = "Лясныя птушкі";
      arrBirds[3].innerHTML = "Пявучыя птушкі";
      arrBirds[4].innerHTML = "Драпежныя птушкі";
      arrBirds[5].innerHTML = "Марскія птушкі";
      navList[0].innerHTML = "Галоўная";
      navList[1].innerHTML = "Віктарына";
      navList[2].innerHTML = "Галерэя";
      break;
  }
}

translateQ();
