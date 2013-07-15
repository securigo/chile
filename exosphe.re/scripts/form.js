$(document).ready(function() {
	var blocker = true;
	$('input,select,textarea').focus(function() {
		$(this).css("background-color", "#FFF");
	});

	$('input[type="submit"]').click(function(e) {
		if(blocker) {
			e.preventDefault();
			var ready = true;
			$('input,select').each(function() {
				if(!$(this).val() && !$(this).attr('optional')) {
					ready = false;
					$(this).css("background-color", "#FFBBBB");
				}
			});
			
			$('textarea').each(function() {
				if(!$(this).val() && !$(this).attr('optional')) {
					ready = false;
					$(this).css("background-color", "#FFBBBB");
				}
			});
			
			if(!ready) {
				alert("Please fill in all required fields.");
			} else {
				blocker = false;
				$(this).trigger('click');
			}
		}
	});
});