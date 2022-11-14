import birdsData from "./list.js";
import getRandomIntInclusive from "./random.js";

const audio = new Audio();
const buttonPlay = document.querySelector(".play");
const progress = document.querySelector(".progress");
const progressCont = document.querySelector(".progress-container");
const timeBit = document.querySelector(".currentPlay");
const timeAll = document.querySelector(".lengthPlay");
const volumeImg = document.querySelector(".volumeImg");
const volumeImgOff = document.querySelector(".volumeImgOff");
const volume = document.querySelector(".volume");
let next = document.querySelector(".button-next");
let clickAnswer = document.querySelector(".answer-list");

let numberLevel = 0;

let numberSong;
let playSave;

function random() {
  numberSong = getRandomIntInclusive(0, 5);
  localStorage.setItem("now", numberSong);
}
const player = document.querySelector(".player");

export function music() {
  random();

  player.classList.add("playOn");
  buttonPlay.addEventListener("click", toggleBtn);

  audio.currentTime = 0;

  function updateCurrentSong() {
    numberLevel = localStorage.getItem("numberLevel");
    let numberWin = localStorage.getItem("winnerNumber");

    if (localStorage.getItem("winnerNumber")) {
      audio.src = birdsData[numberLevel][numberWin].audio;
      audio.play();
      timeAll.textContent = `${birdsData[numberLevel][numberWin].duration}`;
    } else {
      audio.src = birdsData[numberLevel][numberSong].audio;
      audio.play();
      timeAll.textContent = `${birdsData[numberLevel][numberSong].duration}`;
    }

    playSave = localStorage.getItem("timePlay");
    if (!playSave) {
      audio.currentTime = 0;
    } else {
      audio.currentTime = playSave;
    }
  }
  function pauseAudio() {
    player.classList.add("playOn");
    audio.pause();
    localStorage.setItem("timePlay", audio.currentTime);
  }
  function pauseAudioNext() {
    audio.pause();
    player.classList.remove("playOn");
  }

  function playAudio() {
    updateCurrentSong();
    audio.play();
    player.classList.remove("playOn");
  }

  function toggleBtn() {
    buttonPlay.classList.toggle("pause");
  }

  buttonPlay.addEventListener("click", () => {
    const isPlay = player.classList.contains("playOn");
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
    numberLevel++;
    audio.currentTime = 0;
    timeAll.textContent = "00:00";
    timeBit.textContent = "00:00";
    pauseAudioNext();
    toggleBtn();
    random();
    localStorage.removeItem("winnerNumber");
  });

  function stopMusicWin() {
    let win = localStorage.getItem("winner");
    if (win) {
      buttonPlay.classList.remove("pause");
      audio.pause();
      player.classList.add("playOn");
      localStorage.setItem("timePlay", audio.currentTime);
    }
  }

  clickAnswer.addEventListener("click", (event) => {
    let target = event.target;
    if ((target.className = "form-check")) {
      setTimeout(stopMusicWin, 500);
    }
  });
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
localStorage.removeItem("winnerNumber");
