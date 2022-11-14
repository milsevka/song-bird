import birdsData from "./list.js";

const audioCurrent = new Audio();
const buttonPlay = document.querySelector(".play-current");
const progress = document.querySelector(".progress-current");
const progressCont = document.querySelector(".progress-container-current");
const timeBit = document.querySelector(".currentPlay-current");
const timeAll = document.querySelector(".lengthPlay-current");
const volumeImg = document.querySelector(".volumeImg-current");
const volumeImgOff = document.querySelector(".volumeImgOff-current");
const volume = document.querySelector(".volume-current");
const player = document.querySelector(".player-current");
let next = document.querySelector(".button-next");
let mainClick = document.querySelector(".answer-list");

let counter = 0;

let playNum;
let playSaveCurrent;

export function musicCurrent() {
  mainClick.addEventListener("click", (event) => {
    let target = event.target;
    if ((target.className = "form-check")) {
      audioCurrent.currentTime = 0;
      audioCurrent.pause();
      player.classList.add("playOn");
      buttonPlay.classList.remove("pause");
      localStorage.removeItem("timePlayCurrent");
    }
  });

  player.classList.add("playOn");
  buttonPlay.addEventListener("click", toggleBtnCurrent);

  audioCurrent.currentTime = 0;
  function updateCurrentSong() {
    counter = localStorage.getItem("counter");
    playNum = localStorage.getItem("check");
    audioCurrent.src = birdsData[counter][playNum].audio;

    audioCurrent.play();
    timeAll.textContent = `${birdsData[counter][playNum].duration}`;
    playSaveCurrent = localStorage.getItem("timePlayCurrent");
    if (!playSaveCurrent) {
      audioCurrent.currentTime = 0;
    } else {
      audioCurrent.currentTime = playSaveCurrent;
    }
  }

  function pauseAudioCurrent() {
    audioCurrent.pause();
    player.classList.add("playOn");
    localStorage.setItem("timePlayCurrent", audioCurrent.currentTime);
  }

  function playAudioCurrent() {
    updateCurrentSong();
    audioCurrent.play();
    player.classList.remove("playOn");
  }

  function toggleBtnCurrent() {
    buttonPlay.classList.toggle("pause");
  }

  buttonPlay.addEventListener("click", () => {
    const isPlay = player.classList.contains("playOn");
    if (isPlay) {
      playAudioCurrent();
    } else {
      pauseAudioCurrent();
    }
  });
  volumeImg.addEventListener("mouseover", () => {
    volume.classList.toggle("active");
  });
  volumeImg.addEventListener("click", () => {
    volumeImgOff.classList.add("active");
    volumeImg.classList.add("passive");
    audioCurrent.volume = 0;
  });
  volumeImgOff.addEventListener("click", () => {
    volumeImgOff.classList.remove("active");
    volumeImg.classList.remove("passive");
    audioCurrent.volume = 0.5;
  });

  function audioValueCurrent() {
    let v = this.value;
    audioCurrent.volume = v / 100;
  }
  document.querySelector(".volume-current").oninput = audioValueCurrent;

  function pauseAudioNext() {
    audioCurrent.pause();
    player.classList.add("playOn");
    // localStorage.setItem("timePlay", audio.currentTime)
  }

  next.addEventListener("click", () => {
    audioCurrent.currentTime = 0;
    timeAll.textContent = "00:00";
    pauseAudioNext();
    toggleBtnCurrent();
  });
}
musicCurrent();

export function updateCurrentProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audioCurrent.addEventListener("timeupdate", updateCurrentProgress);

export function clickProgressCurrent(e) {
  const widthCont = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioCurrent.duration;
  audioCurrent.currentTime = (clickX / widthCont) * duration;
}
progressCont.addEventListener("click", clickProgressCurrent);

export function setUpdateCurrent() {
  if (!isNaN(audioCurrent.duration)) {
    let curMin = Math.floor(audioCurrent.currentTime / 60);
    let curSec = Math.floor(audioCurrent.currentTime - curMin * 60);
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }
    timeBit.textContent = curMin + ":" + curSec;
  }
  setTimeout(setUpdateCurrent, 1000);
}

buttonPlay.addEventListener("click", setUpdateCurrent);
