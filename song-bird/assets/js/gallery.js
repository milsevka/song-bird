import birdsData from "./list.js";
import { musicGallery , updateGalleryProgress, setUpdateGallery, clickProgressGallery } from './playGallery.js'

let containerGallery = document.querySelector(".gallery-container");
let wrapperPopup = document.querySelector(".wrapper_popup");
let closePopup = document.querySelector(".close_popup")
let nameCur = document.querySelector(".current-name");
let imgCur = document.querySelector(".current-bird");
let infoBird = document.querySelector(".answer-info");
let nameEng = document.querySelector(".answer-name-eng");

function makeGalery() {
  for (let i = 0; i < 6; i++) {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card-wrapper";
    cardContainer.id = i;
    containerGallery.append(cardContainer);
    for (let j = 0; j < 6; j++) {
      let card = document.createElement("div");
      card.className = "card";
      card.id = birdsData[i][j].id;
      let name = document.createElement("p");
      let nameEn = document.createElement("p");
      let pic = document.createElement("img");
      pic.className = "photo";
      name.innerHTML = birdsData[i][j].name;
      nameEn.innerHTML = birdsData[i][j].species;
      pic.src = birdsData[i][j].image;
      cardContainer.append(card);
      card.append(name);
      card.append(nameEn);
      card.append(pic);
    }
  }
}
makeGalery();

  containerGallery.addEventListener("click", (event) => {
    let target = event.target;
    let parent = target.closest(".card")
    let parentCont = target.closest(".card-wrapper")
    let numCard = parent.id;
    localStorage.setItem("card", numCard)
    let numCon = parentCont.id;
    localStorage.setItem("container", numCon)
    wrapperPopup.classList.add("open-popup");
    nameCur.innerHTML = birdsData[numCon][numCard-1].name;
    imgCur.src = birdsData[numCon][numCard-1].image;
    infoBird.innerHTML = birdsData[numCon][numCard-1].description;
    nameEng.innerHTML = birdsData[numCon][numCard-1].species;
    // musicGallery()
  });


closePopup.addEventListener("click" , () => {
    wrapperPopup.classList.remove("open-popup");
  })
  

