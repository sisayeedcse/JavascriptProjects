var text = document.getElementById('bigText');



function home() {
	text.innerText = "This is the home Page";
	text.style.background="cyan";
	text.style.color="#000";
	document.getElementById('contactSec').style.opacity=0;
	document.getElementById("notify").style.opacity="0";
}
function about() {
	text.innerText = "This is the About Page";
	text.style.background="yellow";
	text.style.color="#000";
	document.getElementById('contactSec').style.opacity=0;
	document.getElementById("notify").style.opacity="0";
}
function blog() {
	text.innerText = "This is the blog Page";
	text.style.background="lightgreen";
	text.style.color="#000";
	document.getElementById('contactSec').style.opacity=0;
	document.getElementById("notify").style.opacity="0";
}
function service() {
	text.innerText = "This is the service Page";
	text.style.background="lightblue";
	text.style.color="#000";
	document.getElementById('contactSec').style.opacity=0;
	document.getElementById("notify").style.opacity="0";
}
function contact() {
	text.innerText = "This is the contact Page";
	text.style.background="#ff5621";
	text.style.color="#fff";
	document.getElementById('contactSec').style.opacity=1;
	document.getElementById("notify").style.opacity="0";
}
function notifi(){
	document.getElementById("notify").style.opacity="1";
}
