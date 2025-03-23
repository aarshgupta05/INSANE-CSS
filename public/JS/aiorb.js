const orbs = document.querySelectorAll('.orb');
const speakButton = document.getElementById('speakButton');

function startListening() {
	orbs.forEach(orb => {
		orb.classList.add('listening');
	});
}

function stopListening() {
	orbs.forEach(orb => {
		orb.classList.remove('listening');
	});
}

speakButton.addEventListener('mousedown', startListening);
speakButton.addEventListener('mouseup', stopListening);
speakButton.addEventListener('mouseleave', stopListening);

orbs.forEach(orb => {
	orb.addEventListener('mousedown', () => {
		orb.classList.add('clicked');
	});
	orb.addEventListener('mouseup', () => {
		orb.classList.remove('clicked');
	});
	orb.addEventListener('mouseleave', () => {
		orb.classList.remove('clicked');
	});
});
