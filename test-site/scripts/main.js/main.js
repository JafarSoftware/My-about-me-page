//Image switcher code

let myImage = document.querySelector('img');

myImage.onClick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mute.r6jpg') {
	myImage.setAttribute ('src','images/r6.jpg')
	} else {
	myImage.setAttribute ('src','images/rescue.jpg');
		}
	}

	
	//Personalized welcome code
	
let myButton = document.querySelector('button');
let myHeading = document.getElementById('title');
 myHeading.html = 'hello this is my page'
function setUserName() { 
let myName = prompt('Please enter your name.');
if(!myName) {
	setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Rainbow 6 is cool,' + myName;
	}
		}
		
if(!localStorage.getItem('name')); {
	setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Rainbow 6 is cool, ' + storedName;
}				

myButton.onclick = function() {
	setUserName();
	}	