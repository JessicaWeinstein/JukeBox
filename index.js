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

function unClickedButton(){
	playButton.src = "icons/play_White.png";
	pauseButton.src = "icons/pause_White.png";
	stopButton.src = "icons/stop_White.png";
	previousButton.src = "icons/rewind_White.png";
	nextButton.src = "icons/FF_White.png";
}


function playSong(){
	unClickedButton();
	musicPlayer.play();	
	playButton.src = "icons/play_White_Fill.png";
	
}

function pauseSong() {
	unClickedButton();
	musicPlayer.pause();
	pauseButton.src = "icons/pause_White_Fill.png";
	
}

function stopSong() {
	unClickedButton();
	musicPlayer.pause();
	musicPlayer.currentTime = 0
	stopButton.src = "icons/stop_White_Fill.png";

}

function previousSong(){
	unClickedButton();
	if (i === 0){
		i = songs.length -1 //last song in array
	}
	else{
		i--; // if not first song it goes to previous index in array
	}
	musicPlayer.src = songs[i]; 
	musicPlayer.play();

	previousButton.src = "icons/rewind_White_Fill.png";
	
}

function nextSong(){
	unClickedButton();
	if (i === songs.length -1){ // sets i to first song if you're on the last song
		i = 0
	}
	else{
		i++; // adds 1 to the inidex in array
	}
	musicPlayer.src = songs[i];
	musicPlayer.play();

	nextButton.src = "icons/FF_White_Fill.png";
	
	
}