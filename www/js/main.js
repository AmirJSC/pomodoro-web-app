// Adds the onclick events to the time-tabs.
function addEvents() {
	var tabs = document.getElementsByClassName("timer-mode");
	for (var i=0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", setActiveTab);
	};

	function setActiveTab() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	}
} 

window.addEventListener('load', addEvents);

class Timer {
	constructor(element) {
		element.innerHTML = Timer.getHTML();

		this.interface = {
		minutes: element.querySelector("#minutes"),
		seconds: element.querySelector("seconds"),
		stopBtn: element.querySelector("stopBtn"),
		startBtn: element.querySelector("startBtn"),
		resetBtn: element.querySelector("resetBtn"),
		};

		this.remainingSeconds = 0;

		this.interface.stopBtn.addEventListener("click", () => {

		});

		this.interface.startBtn.addEventListener("click", () => {

		});

		this.interface.resetBtn.addEventListener("click", () => {})
	}


	// Sets up the minutes and seconds for each timer mode // A method that changes the timer whenever you change tabs. 
		 // Initialize 25 in minutes and 00 in seconds as the starting 
		 // Call updateInterfaceTime
	// A method that updates the interfacetime

	// A method that resets the timer
		 // Call updateInterfaceTime
	// A method that starts the timer
		// Call updateInterfaceTime
	// A method that stops the timer
		// Call updateInterfaceTime



	static getHTML() {
		return	`<div class="d-flex flex-row align-items-center justify-content-center bg-success">
					<p id="minutes">25</p>
		 			<p id="colon">:</p>
		 			<p id="seconds">00</p>
		 		</div>
		 		<div class="d-flex flex-row justify-content-center p-5 bg-warning">
					<button class="" id="stopBtn">Stop</button>
					<button class="" id="startBtn">Start</button>
					<button class="" id="resetBtn">Reset</button>
				</div>`;
	}
}

let newTimer = new Timer(
	document.querySelector("#timerCountdown")
);

