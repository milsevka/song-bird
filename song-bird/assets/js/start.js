
let letsgo = document.querySelector(".button-play")
let title1 = document.querySelector(".greetings-title")
let infotitle1 = document.querySelector(".info-title")
let specTitle = document.querySelector(".specification-title")
let specific = document.querySelector(".info-title-specification")
let choise = document.querySelectorAll(".form-lang-input")
let woof = document.querySelector(".form-lang")
let navList = document.querySelectorAll(".nav-text")

 function lang() {
  choise.forEach(el => {
    el.onchange = () => localStorage.setItem("lang", el.id);
    if(!localStorage.getItem("lang")) {
      document.getElementById("ru").checked = true;
      navList[0].innerHTML = "Главная";
      navList[1].innerHTML = "Викторина";
      navList[2].innerHTML = "Галерея";
      title1.innerHTML = "Привет, друг! Это викторина Song Bird.";
      letsgo.innerHTML = "Играть"
      specTitle.innerHTML = "Правила викторины простые:";
      specific.innerHTML = "1. Прослушать аудиозапись с пением птицы.<br> 2. Выбрать из списка ту птицу, которой принадлежит голос.<br> 3. Если ответ верный - загорается зеленый свет, ты получаешь баллы и увидишь краткую информацию о птице.<br> 4. Если ответ неверный - загорается красный свет, но ты всё еще можешь выбрать правильный ответ.";
      infotitle1.innerHTML = "Последние  исследования ученых показали, что в мире живут примерно 50 миллиардов птиц, относящихся к 9700 видам. Самыми распространенными стали домовые воробьи (1,6 миллиарда особей), обыкновенные скворцы (1,3 миллиарда особей), делавэрские чайки (1,2 миллиарда особей) и деревенские ласточки (1,1 миллиарда особей).<br> Знаешь ли ты их голоса?";
    } else if (localStorage.getItem("lang") == "en" ) {
      document.getElementById("en").checked = true;
      navList[0].innerHTML = "Нome";
  navList[1].innerHTML = "Quiz";
  navList[2].innerHTML = "Gallery";
      title1.innerHTML = "Hi, friend! This is a Song Bird quiz.";
      letsgo.innerHTML = "Play"
      specTitle.innerHTML = "The rules of the quiz are simple:";
      specific.innerHTML = "1. Listen to an audio recording of a bird singing.<br> 2. Select from the list the bird that owns the voice.<br> 3. If the answer is correct - the green light turns on, you get points and you will see brief information about the bird.<br> 4. If the answer is wrong, the red light turns on, but you can still choose correct answer.";
      infotitle1.innerHTML = "The latest research by scientists show that there are approximately 50 billion birds belonging to 9,700 species live in the world.<br>House sparrows are the most common(1.6 billion individuals), common starlings(1.3 billion individuals), Delaware gulls (1.2 billion individuals) and barn swallows (1.1 billion individuals).<br> Do you know their voices?";
    } else if (localStorage.getItem("lang") == "be" ) {
      document.getElementById("be").checked = true;
      navList[0].innerHTML = "Галоўная";
  navList[1].innerHTML = "Віктарына";
  navList[2].innerHTML = "Галерэя";
      title1.innerHTML = "Прывітанне сябар! Гэта віктарына Song Bird.";
      letsgo.innerHTML = "Гуляць"
      specTitle.innerHTML = "Правілы віктарыны простыя:";
      specific.innerHTML = "1. Праслухаць аўдыёзапіс са спевамі птушкі.<br> 2. Выбраць са спісу тую птушку, якой належыць голас.<br> 3. Калі адказ верны - загараецца зялёнае святло, ты атрымліваеш балы і ўбачыш кароткую інфармацыю пра птушку. <br> 4 .Калі адказ няслушны - загараецца чырвонае святло, але ты ўсё яшчэ можаш выбраць правільны адказ.";
      infotitle1.innerHTML = "Апошнія даследаванні навукоўцаў паказалі, што ў свеце жывуць прыкладна 50 мільярдаў птушак, якія адносяцца да 9700 відаў. Самымі распаўсюджанымі сталі вераб'і (1,6 мільярда асобін), звычайныя шпакі (1,3 мільярда асобін), делавэрскія чайкі (1,2 мільярда асобін) і вясковыя ластаўкі (1,1 мільярда асобін). <br> Ці ведаеш ты іх галасы?";
    }
  })
}

letsgo.addEventListener('click', lang);

// woof.addEventListener('click', () => {
//   meow()
// });

// function meow() {
//   Array.from(document.querySelectorAll(".form-lang-input")).forEach(function(el){
//     el.onchange = function(){
//       console.log(el.id)
//     }
//   })
// }




window.addEventListener('load', lang)

window.addEventListener('load',  function() {
  if(!localStorage.getItem("lang")) {
    localStorage.setItem("lang", 'ru')
    document.getElementById("ru").checked = true;
  }
});

 //localStorage.removeItem("lang")

