const audio = new Audio();
import birdsData from "./list.js";
const buttonPlay = document.querySelector(".play-current");
const progress = document.querySelector(".progress");
const progressCont = document.querySelector(".progress_container");
const timeBit = document.querySelector(".currentPlay");
const timeAll = document.querySelector(".lengthPlay");
const volumeImg = document.querySelector(".volumeImg");
const volumeImgOff = document.querySelector(".volumeImgOff");
const volume = document.querySelector(".volume");
let next = document.querySelector(".button-next");
let counter = 0;
const player = document.querySelector(".player");


export function musicCurrent() {  
  player.classList.add("meow");
//   buttonPlay.addEventListener("click", toggleBtn)
  audio.currentTime = 0;
  function updateCurrentSong() {
    let playNum = localStorage.getItem("check")
    audio.src = birdsData[counter][playNum].audio;
    audio.currentTime = 0;
    audio.play();
    timeAll.textContent = `${birdsData[counter][playNum].duration}`;
  }
//   function pauseAudio() {
//     audio.pause();
//     player.classList.add("meow");

//   }
//   function pauseAudioNext() {
//     audio.pause();
//     player.classList.remove("meow");
    
//   }

//   function playAudio() {
//     updateCurrentSong();
//     audio.play();
//     player.classList.remove("meow");
//   }

//   function toggleBtn() {
//     buttonPlay.classList.toggle("pause");
  
//   }

//   buttonPlay.addEventListener("click", () => {
//     const isPlay = player.classList.contains("meow");
//     if (isPlay) {
//       playAudio();
//     } else {
//       pauseAudio();
//       pauseAudioNext();
//     }
//   });
//   volumeImg.addEventListener("mouseover", () => {
//     volume.classList.toggle("active");
//   });
//   volumeImg.addEventListener("click", () => {
//     volumeImgOff.classList.add("active");
//     volumeImg.classList.add("passive");
//     audio.volume = 0;
//   });
//   volumeImgOff.addEventListener("click", () => {
//     volumeImgOff.classList.remove("active");
//     volumeImg.classList.remove("passive");
//     audio.volume = 0.5;
//   });

//   function audioValue() {
//     let v = this.value;
//     audio.volume = v / 100;
//   }
//   document.querySelector(".volume").oninput = audioValue;
 


}
musicCurrent()