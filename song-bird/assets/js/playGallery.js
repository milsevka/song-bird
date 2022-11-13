import birdsData from "./list.js";

const audioGal = new Audio();
const buttonPlay = document.querySelector(".play-gallery"); //
const progress = document.querySelector(".progress-gallery");  //
const progressCont = document.querySelector(".progress_container-gallery"); //
const timeBit = document.querySelector(".currentPlay-gallery"); //
const timeAll = document.querySelector(".lengthPlay-gallery"); //
const volumeImg = document.querySelector(".volumeImg-gallery");//
const volumeImgOff = document.querySelector(".volumeImgOff-gallery");//
const volume = document.querySelector(".volume-gallery"); //
const player = document.querySelector(".player-gallery");//
let closePopup = document.querySelector(".close_popup")




export function musicGallery() {
 
  player.classList.add("meow");
  buttonPlay.addEventListener("click", toggleBtnGallery);
  // audioGal.currentTime = 0;

  function updateGallerySong() {
 
    let card = localStorage.getItem("card")
    let container = localStorage.getItem("container")
    
    audioGal.src = birdsData[container][card-1].audio;
   
    audioGal.currentTime = 0;
    timeAll.textContent = `${birdsData[container][card-1].duration}`;
    let save = localStorage.getItem("timePlayGal")
    if(!save) {
      audioGal.currentTime = 0;
    } else {
      audioGal.currentTime = save;
    }
  }

  function pauseAudioGallery() {
    audioGal.pause();
    player.classList.add("meow");
    localStorage.setItem("timePlayGal", audioGal.currentTime)
  }
  

  function playAudioGallery() {
    updateGallerySong();
    audioGal.play();
    player.classList.remove("meow");
  }

  function toggleBtnGallery() {
    buttonPlay.classList.toggle("pause");
  }

  buttonPlay.addEventListener("click", () => {
    const isPlay = player.classList.contains("meow");
    if (isPlay) {
      playAudioGallery();
    } else {
      pauseAudioGallery();
    }
  });
  volumeImg.addEventListener("mouseover", () => {
    volume.classList.toggle("active");
  });
  volumeImg.addEventListener("click", () => {
    volumeImgOff.classList.add("active");
    volumeImg.classList.add("passive");
    audioGal.volume = 0;
  });
  volumeImgOff.addEventListener("click", () => {
    volumeImgOff.classList.remove("active");
    volumeImg.classList.remove("passive");
    audioGal.volume = 0.5;
  });

  function audioValueGallery() {
    let v = this.value;
    audioGal.volume = v / 100;
  }
  document.querySelector(".volume-gallery").oninput = audioValueGallery;


closePopup.addEventListener("click", () => {
  pauseAudioGallery();
  buttonPlay.classList.remove("pause");
  localStorage.removeItem("card")
  localStorage.removeItem("container")
  localStorage.removeItem("timePlayGal")

  timeAll.textContent = "00:00";
  
  audioGal.currentTime = 0;

})
 }

musicGallery()

export function updateGalleryProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audioGal.addEventListener("timeupdate", updateGalleryProgress);

export function clickProgressGallery(e) {
  const widthCont = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioGal.duration;
  audioGal.currentTime = (clickX / widthCont) * duration;
}
progressCont.addEventListener("click", clickProgressGallery);

export function setUpdateGallery() {
  if (!isNaN(audioGal.duration)) {
    let curMin = Math.floor(audioGal.currentTime / 60);
    let curSec = Math.floor(audioGal.currentTime - curMin * 60);
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }
    timeBit.textContent = curMin + ":" + curSec;
  }
  setTimeout(setUpdateGallery, 1000);
}

buttonPlay.addEventListener("click", setUpdateGallery);

localStorage.removeItem("card")
localStorage.removeItem("container")
localStorage.removeItem("timePlayGal")

