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

var pomodoro = {
	
}

// For the Timer countdown
// Make an object with methods inside.
// Sets up the minutes and seconds for each timer mode. 
// A method that initializes the timer at 25 minutes upon loading of the page. 
// A method that resets the timer
// A method that starts the timer
// A method that stops the timer
// A method that changes the timer whenever you change tabs. 

