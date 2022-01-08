const timer = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
	longBreakInterval: 4,
	sessions: 0
};

let interval;
let running = false;

document.querySelector("#controlButtons").addEventListener("click", (event) => {
	if (event.target.id == 'startBtn') 
		startTimer();
	else if (event.target.id == 'stopBtn') 
		stopTimer();
});
document.querySelector("#mode-buttons").addEventListener('click', handleMode);

function startTimer()  {
	// this conditional is added so it won't run another timer when startButton is pressed more than once. 
	if (!running) {
		running = true;
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
}

function stopTimer() {
	clearInterval(interval);
	running = false;
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

function handleMode(event) {
	const mode = event.target;
	if (mode.id === "mode-buttons") return;
	const currentMode = document.getElementsByClassName("active");
	currentMode[0].className = currentMode[0].className.replace(" active", "")
	mode.classList.add("active");

	switchMode(mode.id);
	stopTimer();
}

window.onload = switchMode('pomodoro');








const timer = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
	longBreakInterval: 4,
	sessions: 0
};

let interval;

document.querySelector("#controlButtons").addEventListener("click", (event) => {
	if (event.target.id == 'startBtn') 
		startTimer();
	else if (event.target.id == 'stopBtn') 
		stopTimer();
});
document.querySelector("#mode-buttons").addEventListener('click', handleMode);

function getRemainingTime(endTime) {
	const currentTime = Date.parse(new Date());
	const difference = endTime - currentTime;

	const total = Number.parseInt(difference/1000, 10);
	const minutes = Number.parseInt((total /60) % 60, 10);
	const seconds = Number.parseInt(total % 60, 10);

	return {
		total: total,
		minutes: minutes,
		seconds: seconds
	}
}

function startTimer()  {
	let {total} = timer.remainingTime;
	const endTime =  Date.parse(new Date()) + total * 1000;

	if (timer.mode === 'pomodoro') {
		timer.sessions++;
	}
	console.log(timer.sessions);

	interval = setInterval(function() {
		timer.remainingTime = getRemainingTime(endTime);
		updateClock();

		total = timer.remainingTime.total;
		if (total <= 0) {
			clearInterval(interval);
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(interval);
}

function updateClock() {
  	const minutes = timer.remainingTime.minutes.toString().padStart(2, '0');
  	const seconds = timer.remainingTime.seconds.toString().padStart(2, '0');

	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
}

function switchMode(mode) {
	timer.mode = mode;
	timer.remainingTime = {
		total: timer[mode] * 60,
		minutes: timer[mode],
		seconds: 0
	}
	updateClock();
}

function handleMode(event) {
	const mode = event.target;
	if (mode.id === "mode-buttons") return;
	const currentMode = document.getElementsByClassName("active");
	currentMode[0].className = currentMode[0].className.replace(" active", "")
	mode.classList.add("active");

	switchMode(mode.id);
	stopTimer();
}

window.onload = switchMode('pomodoro');










const timer = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
	longBreakInterval: 4,
	sessions: 0
};

let interval;

document.querySelector("#controlButtons").addEventListener("click", (event) => {
	if (event.target.id == 'startBtn') 
		startTimer();
	else if (event.target.id == 'stopBtn') 
		stopTimer();
});
document.querySelector("#mode-buttons").addEventListener('click', handleMode);

function startTimer()  {
	const endTime =  Date.parse(new Date()) + timer.remainingTime * 1000;

	interval = setInterval(function() {
		const currentTime = Date.parse(new Date());
		timer.remainingTime  = endTime - currentTime;
		updateClock();

		remainingTime = timer.remainingTime;
		console.log(remainingTime, typeof remainingTime);
		if (remainingTime <= 0) {
			clearInterval(interval);
		}
	}, 1000);
}

function stopTimer() {
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

function handleMode(event) {
	const mode = event.target;
	if (mode.id === "mode-buttons") return;
	const currentMode = document.getElementsByClassName("active");
	currentMode[0].className = currentMode[0].className.replace(" active", "")
	mode.classList.add("active");

	switchMode(mode.id);
	stopTimer();
}

window.onload = switchMode('pomodoro');



const timer = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
	longBreakInterval: 4,
	sessions: 0
};

let interval;

document.querySelector("#controlButtons").addEventListener("click", (event) => {
	if (event.target.id == 'startBtn') 
		startTimer();
	else if (event.target.id == 'stopBtn') 
		stopTimer();
});
document.querySelector("#mode-buttons").addEventListener('click', handleMode);

function getRemainingTime(endTime) {
	const currentTime = Date.parse(new Date());
	const difference = endTime - currentTime;

	const total = Number.parseInt(difference/1000, 10);
	return total;
}

function startTimer()  {
	const endTime =  Date.parse(new Date()) + timer.remainingTime * 1000;

	interval = setInterval(function() {
		timer.remainingTime = getRemainingTime(endTime);
		console.log(timer.remainingTime);
		updateClock();

		remainingTime = timer.remainingTime;
		if (remainingTime <= 0) {
			clearInterval(interval);
		}
	}, 1000);
}

function stopTimer() {
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

function handleMode(event) {
	const mode = event.target;
	if (mode.id === "mode-buttons") return;
	const currentMode = document.getElementsByClassName("active");
	currentMode[0].className = currentMode[0].className.replace(" active", "")
	mode.classList.add("active");

	switchMode(mode.id);
	stopTimer();
}

window.onload = switchMode('pomodoro');