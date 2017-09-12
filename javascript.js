//triggers alert box when mouse pointer moves out of the "facelook" title in upper left-hand page corner 
document.getElementById("title").addEventListener("mouseout", stayMessage); 

//triggers alert box when mouse pointer moves off of the "Log In" button
document.getElementById("login").addEventListener("mouseout", stayMessage);

//defines function for alert box called by the above mouse events
function stayMessage() {
	alert ("You haven't signed up yet!");  
}