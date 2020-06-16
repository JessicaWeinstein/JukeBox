//Jukebox HW

//HINT: look at code from image gallery, array of images is similar to array of songs


var songs = [
	"audio/Porches - Slow Dance in the Cosmos - 10 The Cosmos.mp3",
	"audio/Trace Mountains - Lost in the Country - 01 Rock & Roll.mp3",
	"audio/Angel Olsen - Shut Up Kiss Me.mp3"
];

let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let stopButton = document.getElementById("stop");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let musicPlayer = document.getElementById("myAudio")

var i = 0; //first song is 0 in index

playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);
stopButton.addEventListener("click", stopSong);
previousButton.addEventListener("click", previousSong);
nextButton.addEventListener("click", nextSong);

function playSong(){
	musicPlayer.play();	
}

function pauseSong() {
	musicPlayer.pause();
}

function stopSong() {
	musicPlayer.pause();
	musicPlayer.currentTime = 0
}

function previousSong(){
	if (i === 0){
		i = songs.length -1
	}
	else{
		i--;
	}
	musicPlayer.src = songs[i];
	musicPlayer.play();
}

function nextSong(){
	if (i === songs.length -1){
		i = 0
	}
	else{
		i++;
	}
	musicPlayer.src = songs[i];
	musicPlayer.play();
}