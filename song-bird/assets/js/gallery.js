 import birdsData from "./list.js";

let containerGallery = document.querySelector(".gallery-container")
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")
let div5 = document.querySelector(".div5")
let div6 = document.querySelector(".div6")

function makeGalery() {
   
    for (let i = 0; i <= 5; i++) {
        let card = document.createElement("div")
        card.className = "card"
        let name = document.createElement("p")
        let nameEn = document.createElement("p")
        let pic = document.createElement("img")
        let text = document.createElement("p")
        pic.className = "photo"
        name.innerHTML = birdsData[0][i].name;
        nameEn.innerHTML = birdsData[0][i].species;
        pic.src = birdsData[0][i].image;
        text.innerHTML = birdsData[0][i].description;
        div1.append(card)
        card.append(name)
        card.append(nameEn)
        card.append(pic)
        card.append(text)
    }
    for (let i = 0; i <= 5; i++) {
        let card = document.createElement("div")
        card.className = "card"
        let name = document.createElement("p")
        let nameEn = document.createElement("p")
        let pic = document.createElement("img")
        let text = document.createElement("p")
        pic.className = "photo"
        name.innerHTML = birdsData[1][i].name;
        nameEn.innerHTML = birdsData[1][i].species;
        pic.src = birdsData[1][i].image;
        text.innerHTML = birdsData[1][i].description;
        div2.append(card)
        card.append(name)
        card.append(nameEn)
        card.append(pic)
        card.append(text)
    }
    for (let i = 0; i <= 5; i++) {
        let card = document.createElement("div")
        card.className = "card"
        let name = document.createElement("p")
        let nameEn = document.createElement("p")
        let pic = document.createElement("img")
        let text = document.createElement("p")
        pic.className = "photo"
        name.innerHTML = birdsData[2][i].name;
        nameEn.innerHTML = birdsData[2][i].species;
        pic.src = birdsData[2][i].image;
        text.innerHTML = birdsData[2][i].description;
        div3.append(card)
        card.append(name)
        card.append(nameEn)
        card.append(pic)
        card.append(text)
    }
    for (let i = 0; i <= 5; i++) {
        let card = document.createElement("div")
        card.className = "card"
        let name = document.createElement("p")
        let nameEn = document.createElement("p")
        let pic = document.createElement("img")
        let text = document.createElement("p")
        pic.className = "photo"
        name.innerHTML = birdsData[3][i].name;
        nameEn.innerHTML = birdsData[3][i].species;
        pic.src = birdsData[3][i].image;
        text.innerHTML = birdsData[3][i].description;
        div4.append(card)
        card.append(name)
        card.append(nameEn)
        card.append(pic)
        card.append(text)
    }
    for (let i = 0; i <= 5; i++) {
        let card = document.createElement("div")
        card.className = "card"
        let name = document.createElement("p")
        let nameEn = document.createElement("p")
        let pic = document.createElement("img")
        let text = document.createElement("p")
        pic.className = "photo"
        name.innerHTML = birdsData[4][i].name;
        nameEn.innerHTML = birdsData[4][i].species;
        pic.src = birdsData[4][i].image;
        text.innerHTML = birdsData[4][i].description;
        div5.append(card)
        card.append(name)
        card.append(nameEn)
        card.append(pic)
        card.append(text)
    }
    for (let i = 0; i <= 5; i++) {
        let card = document.createElement("div")
        card.className = "card"
        let name = document.createElement("p")
        let nameEn = document.createElement("p")
        let pic = document.createElement("img")
        let text = document.createElement("p")
        pic.className = "photo"
        name.innerHTML = birdsData[5][i].name;
        nameEn.innerHTML = birdsData[5][i].species;
        pic.src = birdsData[5][i].image;
        text.innerHTML = birdsData[5][i].description;
        div6.append(card)
        card.append(name)
        card.append(nameEn)
        card.append(pic)
        card.append(text)
    }
}
makeGalery()