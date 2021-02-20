var gTimelapse = 0;


var goodChoiceChosen = false;
var question1Asked = false;
var question2Asked = false;
var question3Asked = false;
var question4Asked = false;

var watching = 0;

$(document).ready(function() {

	$('.not-interested').on('click', function(){
		hideQuestion();
		seekToTime(20);
	})

	/* Demo set 1 ---------------------------------------------------------- */
	$('.box2-1').on('click', function(){
		if (gTimelapse > 0 && gTimelapse < 4) {
			showYoutube();
		}
	})

	$('.box3-1').on('click', function(){
		if (gTimelapse > 0 && gTimelapse < 4) {
			showYoutube();
		}
	})

	$('.box2-2').on('click', function(){
		if (gTimelapse > 0 && gTimelapse < 4) {
			showYoutube();
		}
	})

	$('.box3-2').on('click', function(){
		if (gTimelapse > 0 && gTimelapse < 4) {
			showYoutube();
		}
	})

	$('.box2-3').on('click', function(){
		if (gTimelapse > 0 && gTimelapse < 4) {
			showYoutube();
		}
	})

	$('.box3-3').on('click', function(){
		if (gTimelapse > 0 && gTimelapse < 4) {
			showYoutube();
		}
	})

	/* Demo set 2 ---------------------------------------------------------- */
	$('.interested').on('click', function(){
		$('.q1-content1').hide();
		$('.q1-content2').show();
		seekToTime(20);
	})

	$('.not-interested2').on('click', function(){
		hideQuestion();
	})

	$('.interested2').on('click', function(){
		$('.q2-content1').hide();
		$('.q2-content2').show();
	})

	/* Demo set 3 ---------------------------------------------------------- */
	$('.box2-1').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://onedash22.com");
		}
	})

	$('.box3-1').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://onedash22.com");
		}
	})

	$('.box2-2').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://onedash22.com");
		}
	})

	$('.box3-2').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://onedash22.com");
		}
	})

	/* Demo set 4 ---------------------------------------------------------- */
	$('.box2-3').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://www.youtube.com");
		}
	})

	$('.box2-4').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://www.youtube.com");
		}
	})

	$('.box3-3').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://www.youtube.com");
		}
	})

	$('.box3-4').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://www.youtube.com");
		}
	})

	$('.box4-4').on('click', function(){
		if (gTimelapse > 27 && gTimelapse < 29) {
			window.open("https://www.youtube.com");
		}
	})

	/* Demo set 5 ---------------------------------------------------------- */
	$('.sony-tv').on('click', function() {
		watching = 1;
		hideQuestion();
		$('.subtitle').text('Click anywhere to show product details.');
		$('.subtitle').show();
	})

	$('.black-pen').on('click', function() {
		watching = 2;
		hideQuestion();
		seekToTime(70);
	})

	$('.yellow-pen').on('click', function() {
		watching = 3;
		hideQuestion();
		seekToTime(86);
	})

	$('.white-pen').on('click', function() {
		watching = 4;
		hideQuestion();
		seekToTime(104);
	})

	$('.red-pen').on('click', function() {
		watching = 5;
		hideQuestion();
		seekToTime(122);
	})

	$('.blue-pen').on('click', function() {
		watching = 6;
		hideQuestion();
		seekToTime(133);
	})

	$('.thanks').on('click', function() {
		seekToTime(145);
		hideQuestion();
	})

	/* Demo set 6 ---------------------------------------------------------- */
	$('.hotspot').on('click', function() {
		if (gTimelapse > 41 && gTimelapse < 49) {
			playPauseVideo('.sony-tv-details');
		}
	})

	/* --------------------------------------------------------------------- */

	addVideoListener(onTrackedVideoFram);
	addVideoListener(interact);

});

function onTrackedVideoFram(currentTime, duration){
	var formattedCurrentTime = secondsToHms(currentTime);
	var formattedDurationTime = secondsToHms(duration);

	$('.current').text(formattedCurrentTime);
	$('.duration').text(formattedDurationTime);
}

function interact(timelapse){

	gTimelapse = timelapse;

	if (timelapse > 11 && !question1Asked) {
		playPauseVideo('.popUpQuestion1');
		question1Asked = true;
	}

	if (timelapse > 22 && !question2Asked) {
		playPauseVideo('.popUpQuestion2');
		question2Asked = true;
	}

	if (timelapse > 27 && !question3Asked) {
		$('#playpause').click();
		$('.subtitle').show();
		question3Asked = true;
	}

	if (timelapse > 37 && timelapse > 39 && !question4Asked) {
		$('.subtitle').hide();
		playPauseVideo('.popUpQuestion4');
		question4Asked = true;
	}

	if (timelapse > 50 && watching == 1) {
		seekToTime(39);
		watching = 0;
		question4Asked = false;
	}

	if (timelapse > 83 && watching == 2) {

		seekToTime(39);
		watching = 0;
		question4Asked = false;
	}

	if (timelapse > 100 && watching == 3) {
		seekToTime(39);
		watching = 0;
		question4Asked = false;
	}

	if (timelapse > 119 && watching == 4) {
		seekToTime(39);
		watching = 0;
		question4Asked = false;
	}

	if (timelapse > 131 && watching == 5) {
		seekToTime(39);
		watching = 0;
		question4Asked = false;
	}

	if (timelapse > 143 && watching == 6) {
		seekToTime(39);
		watching = 0;
		question4Asked = false;
	}

}

function showYoutube() {
	playPauseVideo('.youtube');
}