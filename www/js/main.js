const timer = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
	longBreakInterval: 4,
	sessions: 0
};

let interval;

controlButton = document.querySelector("#controlButton");
controlButton.addEventListener("click", () => {
	const control = controlButton.dataset.control;
	if (control == 'start') 
		startTimer();
	else if (control == 'stop') 
		stopTimer();
});
document.querySelector("#mode-buttons").addEventListener('click', handleMode);

function startTimer()  {
	controlButton.dataset.control  = 'stop';
	controlButton.textContent = 'stop';
	interval = setInterval(function() {
		timer.remainingTime -= 1;
		updateClock();

		remainingTime = timer.remainingTime;
		console.log(remainingTime, typeof remainingTime);
		if (remainingTime <= 0) {
			stopTimer();
		}
	}, 1000); 
}

function stopTimer() {
	controlButton.dataset.control  = 'start';
	controlButton.textContent = 'start';
	clearInterval(interval);
}

function updateClock() {
  	const minutes = Math.floor(timer.remainingTime / 60);
  	const seconds = timer.remainingTime % 60;

	document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, "0");
	document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, "0");
}

function switchMode(mode) {
	timer.mode = mode;
	timer.remainingTime = timer[mode] * 60;
	updateClock();
}

// mode = event.target
function handleMode(event) {
	const mode = event.target.id;
	if (mode === "mode-buttons") return;
	const currentMode = document.getElementsByClassName("active");
	currentMode[0].className = currentMode[0].className.replace(" active", "")
	event.target.classList.add("active");

	switchMode(mode);
	stopTimer();
}

window.onload = switchMode('pomodoro');