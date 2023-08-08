console.log("Welcome to Spotify");

// Initializing Variables
let songIndex = 0;
let audioElement = new Audio('songs/Lahore.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Dheeme Dheeme", filePath: "songs/Dheeme Dheeme.mp3", coverPath: "covers/1.jpg" },
    { songName: "Humsafer", filePath: "songs/Hamsafer.mp3", coverPath: "covers/3.jpg" },
    { songName: "High rated gabru", filePath: "songs/High rated gabru.mp3", coverPath: "covers/2.jpg" },
    { songName: "Jatt in hummer", filePath: "songs/Jatt in Hummer .mp3", coverPath: "covers/4.jpg" },
    { songName: "Kaabil", filePath: "songs/Kaabil_a01.mp3", coverPath: "covers/5.jpg" },
    { songName: "Khadke Glassy", filePath: "songs/Khadke Glassy.mp3", coverPath: "covers/6.jpg" },
    { songName: "Lahore", filePath: "songs/Lahore.mp3", coverPath: "covers/7.jpg" },
    { songName: "Woofer", filePath: "songs/Woofer gadi.mp3", coverPath: "covers/8.jpg" }
]

songItem.forEach((element, i) => {  
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

// play/pause update
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listening to events
audioElement.addEventListener('timeupdate', () => {
    //  Updating Seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex>=8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    let song = document.getElementById(songIndex.toString());
    let songPre = document.getElementById((songIndex-1).toString());
    song.classList.remove('fa-play-circle');
    song.classList.add('fa-pause-circle');
    songPre.classList.add('fa-play-circle');
    songPre.classList.remove('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex<=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    let song = document.getElementById(songIndex.toString());
    let songNext = document.getElementById((songIndex+1).toString());
    song.classList.remove('fa-play-circle');
    song.classList.add('fa-pause-circle');
    songNext.classList.add('fa-play-circle');
    songNext.classList.remove('fa-pause-circle');


})