console.log("Welcome to Spotify");

// Initializing Variables
let songIndex = 0;
let audioPlay = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/.jpg"}
]

// play/pause update
masterPlay.addEventListener('click', ()=>{
    if(audioPlay.paused || audioPlay.currentTime<=0)
    {
        audioPlay.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioPlay.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

