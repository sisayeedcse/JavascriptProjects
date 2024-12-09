

function insert(num){
	document.form.textview.value = document.form.textview.value + num;
}
function equal(){
	var equal = document.form.textview.value ;
	if(equal){
		document.form.textview.value = eval(equal);
	}
}
function clean(){
	document.form.textview.value = "";
}
function back(){
	var backSpace = document.form.textview.value;
	document.form.textview.value = backSpace.substring(0,backSpace.length-1);
	
}