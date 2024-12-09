

var imgAry = ["Images/slider_1.jpg" ,"Images/slider_2.jpg" ,"Images/slider_3.jpg"]
var image = document.getElementById('sliderImg');

var count = 0;


function next() {
	count++;
	if (count >=imgAry.length) {
         count = 0;
         image.src = imgAry[count];
	}else{
		image.src = imgAry[count];
	}
}

function prev() {
	count--;
	if (count < 0) {
         count = imgAry.length - 1;
         image.src = imgAry[count];
	}else{
		image.src = imgAry[count];
	}
}
