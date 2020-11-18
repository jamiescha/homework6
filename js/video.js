var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let vol = document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click",function() {
	console.log("Slow Down")
	document.querySelector("video").playbackRate = video.playbackRate*.9 
	console.log(video.playbackRate)

});

document.querySelector("#faster").addEventListener("click",function() {
	console.log("Speed Up")
	document.querySelector("video").playbackRate = video.playbackRate/.9 
	console.log(video.playbackRate)

});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this)
	console.log(this.value);
	document.querySelector('#volume').innerHTML = this.value + "%";
	video.volume = this.value/100
	console.log(video.volume)

});

document.querySelector("#mute").addEventListener("click",function(){
	console.log("Mute");
	if (video.muted == true){
		video.muted=false;
		this.innerHTML = "Mute"
	}
	
	
	else {video.muted =true;
	this.innerHTML = "Unmute"}

	console.log(video.muted)

});

document.querySelector("#skip").addEventListener("click",function(){
	console.log("Skip Ahead" + video.currentTime)
	if(video.currentTime < video.duration - 5 ){
		video.currentTime += 5;
	}
	else {video.currentTime = 0;
	console.log("Restarting")
}
	video.play();

});


document.querySelector("#old").addEventListener("click",function(){
	video.class.add("oldTime")

});

document.querySelector("#original").addEventListener("click",function(){
	video.class.remove("oldTime")

});