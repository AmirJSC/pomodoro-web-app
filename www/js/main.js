const timer = {
	pomodoro: .2,
	shortBreak: .1,
	longBreak: .15,
	sessions: 0
};

let interval;

controlButton = document.querySelector("#controlButton");
controlButton.addEventListener("click", () => {
	const control = controlButton.dataset.control;
	console.log(control);
	switch (control) {
		case 'start':
			startTimer();
			break;
		case'stop':
			stopTimer();
			break;
	}
});
document.querySelector("#resetButton").addEventListener('click', resetTimer);
document.querySelector("#mode-buttons").addEventListener('click', handleMode);

function startTimer()  {
	controlButton.dataset.control  = 'stop';
	controlButton.textContent = 'stop';

	interval = setInterval(function() {
		timer.remainingTime -= 1;
		updateClock();
		console.log(timer.remainingTime);

		remainingTime = timer.remainingTime;
		if (remainingTime < 0) {
			clearInterval(interval);
			if (timer.mode === 'pomodoro') {
				timer.sessions++;
				if (timer.sessions % 4 == 0)
					switchMode('longBreak');
				else
					switchMode('shortBreak');
			}
			else {
				switchMode('pomodoro');
			}
			stopTimer();
		}
	}, 1000); 
}

function stopTimer() {
	controlButton.dataset.control  = 'start';
	controlButton.textContent = 'start';
	clearInterval(interval);
}

function resetTimer() {
	if (controlButton.dataset.control === 'stop') {
		stopTimer();
		switchMode(timer.mode);
	}
		return;
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

	const currentMode = document.getElementsByClassName("active");
	currentMode[0].className = currentMode[0].className.replace(" active", "")
	document.querySelector(`#${mode}`).classList.add("active");

	updateClock();
}

// mode = event.target
function handleMode(event) {
	const mode = event.target.id;
	if (mode === "mode-buttons") return;

	switchMode(mode);
	stopTimer();
}

window.onload = switchMode('pomodoro');