// stick navigation
$(document).ready(function() {

	$('#js-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('stick');
		} else {
			$('nav').removeClass('stick');
		}
	});

	// scroll buttons taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/

	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					});
				}
			}
		});

// elements animation with scroll https://daneden.github.io/animate.css/

$('#animation1').waypoint(function(direction) {
	$('#animation1').addClass('animated fadeIn');
}, {
	offset: '60%'
});

$('#animation2').waypoint(function(direction) {
	$('#animation2').addClass('animated fadeInUp');
}, {
	offset: '70%'
});

$('#animation3').waypoint(function(direction) {
	$('#animation3').addClass('animated bounceInLeft');
}, {
	offset: '70%'
});

$('#animation4').waypoint(function(direction) {
	$('#animation4').addClass('animated fadeIn');
}, {
	offset: '70%'
});


});
