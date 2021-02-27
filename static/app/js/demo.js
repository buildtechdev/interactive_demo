var gTimelapse = 0;
var question1Asked = false;
var question2Asked = false;
var imagePosition = 0;

$(document).ready(function () {

	/* Custom controls ---------------------------------------------------- */
	$('.playpause').on('click', function () {
		playPauseVideo(null);
		if (videoContent[0].paused) {
			$('.playpause span').removeClass('ti-control-pause')
			$('.playpause span').addClass('ti-control-play')
		} else {
			$('.playpause span').removeClass('ti-control-play')
			$('.playpause span').addClass('ti-control-pause')
		}
	});

	$('.screen-resize').on('click', function () {
		if ($('.screen-resize span').hasClass('ti-fullscreen')) {
			$('#video-container').addClass('fullscreen');
			$('.screen-resize span').removeClass('ti-fullscreen')
			$('.screen-resize span').addClass('ti-shortcode')
		} else {
			$('#video-container').removeClass('fullscreen');
			$('.screen-resize span').removeClass('ti-shortcode')
			$('.screen-resize span').addClass('ti-fullscreen')
		}
	});

	/* Demo set 1 ---------------------------------------------------------- */
	$('.home').on('click', function () {
		$('.nav-toogler').click();
		imagePosition = 0;
		question1Asked = false;
		question2Asked = false;
		seekToTime(0);
	})

	$('.cafe').on('click', function () {
		$('.nav-toogler').click();
		imagePosition = 0;
		question1Asked = false;
		question2Asked = false;
		seekToTime(35);
	})

	$('.work').on('click', function () {
		$('.nav-toogler').click();
		imagePosition = 0;
		question1Asked = false;
		question2Asked = false;
		seekToTime(90);
	})

	$('.driving').on('click', function () {
		$('.nav-toogler').click();
		imagePosition = 0;
		question1Asked = false;
		question2Asked = false;
		seekToTime(82);
	})

	/* Demo set 2 ---------------------------------------------------------- */
	$('.call-sister').on('click', function () {
		hideQuestion();
		seekToTime(20);
	})

	$('.call-mommy').on('click', function () {
		hideQuestion();
		seekToTime(47);
	})

	/* Demo set 3 ---------------------------------------------------------- */
	$('.send-text').on('click', function () {
		hideQuestion();
		seekToTime(60);
	})

	$('.go-drive').on('click', function () {
		hideQuestion();
		seekToTime(82);
	})

	addVideoListener(onTrackedVideoFram);
	addVideoListener(interact);

	/** -------------- **/
	let navWrapper = document.querySelector('.nav-wrapper'),
	navToogler = document.querySelector('.nav-toogler')

	navToogler.addEventListener('click', function (event) {
		navWrapper.classList.toggle('active')
	})

});

function onTrackedVideoFram(currentTime, duration) {
	var formattedCurrentTime = secondsToHms(currentTime);
	var formattedDurationTime = secondsToHms(duration);

	$('.current').text(formattedCurrentTime);
	$('.duration').text(formattedDurationTime);
}

function interact(timelapse) {

	gTimelapse = timelapse;

	if (timelapse > 6 && timelapse < 17 && !question1Asked) {
		showQuestion('.popUpQuestion1');
		question1Asked = true;
	}

	if (timelapse > 17 && timelapse < 40 && question1Asked) {
		hideQuestion();
		question1Asked = false;
	}

	if (timelapse > 40 && timelapse < 45 && !question2Asked) {
		showQuestion('.popUpQuestion2');
		question2Asked = true;
	}

	if (timelapse > 45 && timelapse < 50 && question2Asked) {
		hideQuestion();
		question2Asked = false;
		seekToTime(60);
	}
}

