import birdsData from "./list.js";
import getRandomIntInclusive from './random.js';

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
function random () {
    playNum = getRandomIntInclusive(0,5); 
    localStorage.setItem("now", playNum)  
    console.log(`${playNum} random`)
}


export function music() {
    random()
  const player = document.querySelector(".player");

  
  
  player.classList.add("meow");
  buttonPlay.addEventListener("click", toggleBtn);
  audio.currentTime = 0;
  function updateCurrentSong() {
    audio.src = birdsData[counter][playNum].audio;
    audio.currentTime = 0;
    audio.play();
    timeAll.textContent = `${birdsData[counter][playNum].duration}`;
  }

  function pauseAudio() {
    audio.pause();
    player.classList.add("meow");
    // localStorage.setItem("timePlay", audio.currentTime)
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


next.addEventListener("click", () => {
    counter++;
  music;
  updateProgress;
  setUpdate;
  clickProgress;
  random()
    console.log(`${playNum} после изменения номер песни`)
    console.log(`${counter} счетчик уровня`)
  });
  
buttonPlay.addEventListener("click", setUpdate);
 
