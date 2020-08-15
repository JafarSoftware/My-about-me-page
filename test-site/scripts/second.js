let myHeading = document.getElementById('title');
myHeading.innerHTML = "hello check out my page"

let myImage = document.querySelector('img');

myImage.onClick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mute.r6jpg') {
	myImage.setAttribute ('src','images/r6.jpg')
	} else {
	myImage.setAttribute ('src','images/rescue.jpg');
		}
	}


let myButton = document.querySelector('button');
function setUserName() { 
let myName = prompt('Please enter your name.');
if(!myName) {
	setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Rainbow 6 is cool,' + myName;
	}
		}
		
		
if(!localStorage.getItem('name')) {
	setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Rainbow 6 is cool, ' + storedName;
}					
