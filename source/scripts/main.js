document.getElementById("animate_confetti").addEventListener("click", () => {

	let params = {
		particleCount: 500, 
		spread: 90, 
		startVelocity: 70, 
		origin: { x: 0, y: 0.5 }, 
		angle: 45 
	};

	confetti(params);

	params.origin.x = 1;
	params.angle = 135;
	confetti(params);

});