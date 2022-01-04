// Adds the onclick events to the time-tabs.
function addEvents() {
	var tabs = document.getElementsByClassName("timer-mode");
	console.log(tabs);
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

class pomodoro {
	constructor(element) {
	element.innerHTML
	}


	static getHTML() {
		return	
			'<button class="" id="stopBtn">Stop</button> <button class="" id="startBtn">Start</button> <button class="" id="resetBtn">Reset</button>'
	}
	
}



// Make a class with methods inside.
	// Sets up the minutes and seconds for each timer mode.
		 // Initialize 25 in minutes and 00 in seconds as the starting 
		 // Call updateInterfaceTime
function addEvents() {
	 var tabs = document.getElementsByClassName("timer-mode");
	 console.log(tabs);
	 for (var i=0; i < tabs.length; i++) {
	 	tabs[i].addEventListener("click", setActiveTab);
	 };

 	function setActiveTab() {
 		var current = document.getElementsByClassName("active");
 		current[0].className = current[0].className.replace(" active", "");
 		this.className += " active";
 	}
 } 
// A method that updates the interfacetime
// A method that resets the timer
// A method that starts the timer
// A method that stops the timer
// A method that changes the timer whenever you change tabs. 

