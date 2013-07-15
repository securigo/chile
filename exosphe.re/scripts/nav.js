$(document).ready(function(e) {
	$('.navButton a').click(function(e) {
		e.preventDefault();
	});
	
	$('.navButton').click(function() {
		if($(this).children('a').attr("href") != undefined) {
			var url = $(this).children('a').attr("href");
			window.location = url;	
		}
	});
});