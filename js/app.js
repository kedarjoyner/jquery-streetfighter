$(document).ready(function() {
	$('.ryu-container').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	$('.ryu-container').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
});

