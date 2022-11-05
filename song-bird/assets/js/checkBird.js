import birdsData from "./list.js";

let allBirds = document.querySelectorAll(".form-check-input")
let nameBird = document.querySelector(".answer-name-bird")
let imgBird = document.querySelector(".answer-img")
let infoBird = document.querySelector(".answer-info")
let nameCur= document.querySelector(".current-name")
let imgCur= document.querySelector(".current-bird")



let woof = false;


export default function check() {
    document.querySelector(".parent-answer").addEventListener("click", () => {
        if(!woof) {
            let meow = document.createElement("img");
            meow.className = "answer-img-photo";
            imgBird.append(meow);
        }
        for (let i = 0; i < allBirds.length; i++) {
          if (allBirds[i].checked) {
            nameCur.innerHTML = birdsData[0][i].name
            imgCur.src = birdsData[0][i].image
            nameBird.innerHTML = birdsData[0][i].name
            infoBird.innerHTML = birdsData[0][i].description
            meow.src = birdsData[0][i].image
           woof = true;
          }
        }
      });   
}
check()