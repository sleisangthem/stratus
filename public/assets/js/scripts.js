
jQuery(document).ready(function() {

	$(".fade-in-alert").addClass("in").fadeOut(10000);

	/* swap open/close side menu icons */
	$('[data-toggle=collapse]').click(function(){
		// toggle icon
		$(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
	});

	$("#sendFeedback").click( function() {
		//$.post( $("#updateunit").attr("action"),
		// $("#updateunit :input").serializeArray(),function(info){
		$("#result").html('<div class="alert alert-success"><button type="button" class="close">×</button></div>');
		window.setTimeout(function() {
			$(".alert").fadeTo(500, 0).slideUp(500, function(){
				$(this).remove();
			});
		}, 5000);
		$('.alert .close').on("click", function(e){
			$(this).parent().fadeTo(500, 0).slideUp(500);
		});
		//});
	});
	$("#updateunit").submit( function() {
		return false;
	});
});
function clearInput() {
	$("#updateunit :input").each( function() {
		$(this).val('');
	});
}
