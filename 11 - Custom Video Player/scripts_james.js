/* Get our event element*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress  = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build out function*/

function togglePlay(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}

function updateButton(){
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
	console.log('update the button');

}

function skip(){
	console.log('skipping !!!');
	console.log(this.dataset.skip);//string type
	video.currentTime += parseFloat(this.dataset.skip); //parseFloat conver string to number
}

function handleRangeUpdate(){
	video[this.name] = this.value;
	console.log(this.name);
	console.log(this.value);
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	//console.log(e.offsetX);
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	console.log(e);
}

/* Hool up the event listener*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown &&scrub(e)); //run mousedonw if pgo through then scrub()
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


