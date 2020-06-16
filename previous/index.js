//Jukebox HW

//HINT: look at code from image gallery, array of images is similar to array of songs


//Oggi Code Guide:
// let song = "audio.a.mp3" //need a mp3 file in my folder - download something

// let playButton = document.getElementByID("playButton")
// playButton.addEventListener("click", playAudio)

// var myAudio = new Audio();

// function playAudio(){
// 	myAudio.src = song;
// 	myAudio.play()
// }

// function Jukebox(){
// 	this currentSong = 0
// 	this.songs = ["a song", "b song", "c song"];

// 	playSongs = function(){
// 		myAudio.src = songs[this.currentSong]
// 		myAudio.play()
// 	}

// 	nextSong = function(){
// 		this.currentSong++
// 		myAudio.src = songs[this.currentSong]
// 		myAudio.play()
// 	}

// }

// var juke = new Jukebox()
//  	playButton.addEventListener("click", function(){
//  			juke.playSongs()

//  })

//_________________________

//ATTEMPT (only works for play button so far):

// let song1 = "audio/Porches - Slow Dance in the Cosmos - 10 The Cosmos.mp3"
// let song2 = "audio/Trace Mountains - Lost in the Country - 01 Rock & Roll.mp3"
// let song3 = "audio/Angel Olsen - Shut Up Kiss Me.mp3"

// let playButton = document.getElementById("play")
// playButton.addEventListener("click", playAudio)

// let pauseButton = document.getElementById("pause")
// pauseButton.addEventListener("click", pauseAudio)

// var myAudio = new Audio();

// function playAudio(){
// 	myAudio.src = song1;
// 	myAudio.play()
// }

// function pauseAudio(){
// 		myAudio.pause()
// }


// function Jukebox(){
// 	this.currentSong = 0
// 	this.songs = [
// 		"audio/Porches - Slow Dance in the Cosmos - 10 The Cosmos.mp3",
// 		"audio/Trace Mountains - Lost in the Country - 01 Rock & Roll.mp3",
// 		"audio/Angel Olsen - Shut Up Kiss Me.mp3"
// 	];

// 	// playSongs = function(){
// 	// 	myAudio.src = songs[this.currentSong]
// 	// 	myAudio.play()
// }

//____________________

// code similar to image carousel project (this code works):

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
	// index = index - 1;
	// images [index +1].style.display = "none"

	// if (index < 0){
	// 	index = images.length - 1;
	// }
	
}

function pauseSong() {
	musicPlayer.pause();
// 	index = index + 1;
// 	images [index - 1].style.display = "none";

// 	if (index > images.length - 1){
// 		index = 0;
// 	}
// 	images [index].style.display = "block";

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