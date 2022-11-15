import birdsData from "./list.js";
import birdsDataEn from "./listEn.js";
import birdsDataBy from "./listBlr.js";
import { musicGallery , updateGalleryProgress, setUpdateGallery, clickProgressGallery } from './playGallery.js'

document.querySelectorAll(".form-lang-input").forEach(el => {
  el.checked = localStorage.getItem(el.id) === "true";
  el.onchange = () => localStorage.setItem(el.id, el.checked);
})

let containerGallery = document.querySelector(".gallery-container");
let galleryText = document.querySelector(".gallery-text")
let wrapperPopup = document.querySelector(".wrapper-popup");
let closePopup = document.querySelector(".close_popup")
let nameCur = document.querySelector(".current-name");
let imgCur = document.querySelector(".current-bird");
let infoBird = document.querySelector(".answer-info");
let nameEng = document.querySelector(".answer-name-eng");

if(document.getElementById("ru").checked) {
  galleryText.innerHTML = "Вы можете нажать на любую карточку и прочитать подробную информацию о птице, а также послушать её голос";
} else if ((document.getElementById("en").checked)) {
  galleryText.innerHTML = "You can click on any card and read detailed information about the bird, as well as listen to its voice";
} else if ((document.getElementById("be").checked)) {
  galleryText.innerHTML = "Вы можаце націснуць на любую картку і прачытаць падрабязную інфармацыю аб птушцы, а таксама паслухаць яе голас"
}


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
      if(document.getElementById("ru").checked) {
        name.innerHTML = birdsData[i][j].name;
        nameEn.innerHTML = birdsData[i][j].species;
      } else if ((document.getElementById("en").checked)) {
        name.innerHTML = birdsDataEn[i][j].name;
        nameEn.innerHTML = birdsDataEn[i][j].species;
      } else if ((document.getElementById("be").checked)) {
        name.innerHTML = birdsDataBy[i][j].name;
        nameEn.innerHTML = birdsDataBy[i][j].species;
      }
     
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
    // window.addEventListener('beforeunload', setLocalStorage);
    // window.addEventListener('load', getLocalStorage);
    let target = event.target;
    let parent = target.closest(".card")
    let parentCont = target.closest(".card-wrapper")
    let numCard = parent.id;
    localStorage.setItem("card", numCard)
    let numCon = parentCont.id;
    localStorage.setItem("container", numCon)
    wrapperPopup.classList.add("open-popup");
    if(document.getElementById("ru").checked) {
      nameCur.innerHTML = birdsData[numCon][numCard-1].name;
      infoBird.innerHTML = birdsData[numCon][numCard-1].description;
    } else if ((document.getElementById("en").checked)) {
      nameCur.innerHTML = birdsDataEn[numCon][numCard-1].name;
      infoBird.innerHTML = birdsDataEn[numCon][numCard-1].description;
    } else if ((document.getElementById("be").checked)) {
      nameCur.innerHTML = birdsDataBy[numCon][numCard-1].name;
      infoBird.innerHTML = birdsDataBy[numCon][numCard-1].description;
    }
    imgCur.src = birdsData[numCon][numCard-1].image;
    nameEng.innerHTML = birdsData[numCon][numCard-1].species;
  });


closePopup.addEventListener("click" , () => {
    wrapperPopup.classList.remove("open-popup");
  })


  wrapperPopup.onclick = function (event) {
    let target = event.target;
    if (target.className == "wrapper-popup open-popup") {
      wrapperPopup.classList.remove("open-popup");
    }
  };
  
