const audio = new Audio();

export function tryPlay() {
    audio.src = "../songs/true.mp3";
    audio.play();
    audio.currentTime = 0;
    audio.volume = 1;
}
export function falsePlay() {
    audio.src = "../songs/false.mp3";
    audio.play();
}