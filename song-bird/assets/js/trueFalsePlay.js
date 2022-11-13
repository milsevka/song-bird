

export function tryPlay() {
     let winone = localStorage.getItem("winNumb")
     if (winone == 1) {
        let audiotry = new Audio();
        audiotry.src = "../../assets/songs/true.mp3";
        audiotry.play();
        audiotry.volume = 0.5;
     }
   
}
export function falsePlay() {
    let win = localStorage.getItem("winner")
    if (!win) {
        let audiofalse = new Audio();
        audiofalse.src = "../../assets/songs/false.mp3";
        audiofalse.play();
        audiofalse.volume = 0.5;
    }
    
}