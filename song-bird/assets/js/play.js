import birdsData from "./list.js";
import getRandomIntInclusive from "./random.js";

const audio = new Audio();
const buttonPlay = document.querySelector(".play"); 
const progress = document.querySelector(".progress"); 
const progressCont = document.querySelector(".progress_container"); 
const timeBit = document.querySelector(".currentPlay"); 
const timeAll = document.querySelector(".lengthPlay"); 
const volumeImg = document.querySelector(".volumeImg");
const volumeImgOff = document.querySelector(".volumeImgOff");
const volume = document.querySelector(".volume"); 
let next = document.querySelector(".button-next");


let counter = 0;

let playNum;
let playSave;

function random() {
  playNum = getRandomIntInclusive(0, 5);
  localStorage.setItem("now", playNum);
}
const player = document.querySelector(".player");

export function music() {
  random();

  player.classList.add("meow");
  buttonPlay.addEventListener("click", toggleBtn);

  audio.currentTime = 0;
  function updateCurrentSong() {
    counter = localStorage.getItem("counter")
    audio.src = birdsData[counter][playNum].audio;
    audio.play();
    timeAll.textContent = `${birdsData[counter][playNum].duration}`;
    playSave = localStorage.getItem("timePlay")
    if(!playSave) {
      audio.currentTime = 0;
    } else {
      audio.currentTime = playSave;
    }
  }
  function pauseAudio() {
    player.classList.add("meow");
    audio.pause();
    localStorage.setItem("timePlay", audio.currentTime)
  }
  function pauseAudioNext() {
    audio.pause();
    player.classList.remove("meow");
  }

  function playAudio() {
    updateCurrentSong();
    audio.play();
    player.classList.remove("meow");
  }

  function toggleBtn() {
    buttonPlay.classList.toggle("pause");
  
  }

  buttonPlay.addEventListener("click", () => {
    const isPlay = player.classList.contains("meow");
    if (isPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  });
  volumeImg.addEventListener("mouseover", () => {
    volume.classList.toggle("active");
  });
  volumeImg.addEventListener("click", () => {
    volumeImgOff.classList.add("active");
    volumeImg.classList.add("passive");
    audio.volume = 0;
  });
  volumeImgOff.addEventListener("click", () => {
    volumeImgOff.classList.remove("active");
    volumeImg.classList.remove("passive");
    audio.volume = 0.5;
  });

  function audioValue() {
    let v = this.value;
    audio.volume = v / 100;
  }
  document.querySelector(".volume").oninput = audioValue;

  next.addEventListener("click", () => {
    counter++;
    audio.currentTime = 0;
    timeAll.textContent = "00:00";
    pauseAudioNext();
    toggleBtn();
    random();
  });

  function stopMusicWin() {
    let win = localStorage.getItem("winner");
    if (win) {
      pauseAudioNext();
   } 
  }
stopMusicWin();
 
}
music();

export function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener("timeupdate", updateProgress);

export function clickProgress(e) {
  const widthCont = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / widthCont) * duration;
}
progressCont.addEventListener("click", clickProgress);

export function setUpdate() {
  if (!isNaN(audio.duration)) {
    let curMin = Math.floor(audio.currentTime / 60);
    let curSec = Math.floor(audio.currentTime - curMin * 60);
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }
    timeBit.textContent = curMin + ":" + curSec;
  }
  setTimeout(setUpdate, 1000);
}

buttonPlay.addEventListener("click", setUpdate);








