var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var textContent = document.querySelector("bodyGradient")
var button = document.getElementsByTagName("button")[0];
var col1 = document.getElementById("color1").value;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

textContent = function() {
	css.textContent = body.style.background + ";";
}

//function to return ramdom hex code
function getRandomColor() {
	var alphaNum = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += alphaNum[Math.floor(Math.random() * 16)];
	}
		return color;
}
// this optional code can be used to provide ramdom 360deg gradient instead of linear...
	// ...when substituted with 1st line of code in setRandomColor
// function getRandomGradient() {
// return 'linear-gradient('+(Math.random()*360)+', '+getRandomColor()+', '+getRandomColor()+')';
// }


//function to set the hex code generated in getRandomCode
function setRandomColor() {
body.style.background = 'linear-gradient(to right, '+getRandomColor()+', '+getRandomColor()+')';
css.textContent = body.style.background + ";";
button.style.background = body.style.background;
// color1.style.background = body.style.background;  //to apply random color to picker background
// color2.style.background = body.style.background;  //to apply random color to picker background
}

//button event listener to setRandomColor
button.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


//code to set color inputs that match background generated on first page load.
document.addEventListener("DOMContentLoaded", setGradient); 



