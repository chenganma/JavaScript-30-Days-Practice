function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	console.log({now, then});

	coountdown = setInterval(()=>{

		const secondsLeft = Math.round((then - Date.now()) / 1000);
		//check if we need to stop it
		if(secondsLeft < 0){
			clearInterval(coountdown);
			return;
		}
		console.log(secondsLeft);


	}, 1000);
}