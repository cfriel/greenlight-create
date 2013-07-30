Template.pending.rendered = function() {
    $('#create').click(function(){

	$('#create-buttons').hide();
	$('#progress-container').show();

	setTimeout(function(){
	    $("#progress_text").text("Configuring database dependencies");
	    $("#progress_bar").css("width", "20%");
	    setTimeout(function(){
		$("#progress_text").text("Setting up template " + Session.get("selected_template"));
		$("#progress_bar").css("width", "40%");
		setTimeout(function(){
		    $("#progress_text").text("Granting user access");
		    $("#progress_bar").css("width", "60%");
		    setTimeout(function(){
			$("#progress_text").text("Setting up site at " + Session.get("selected_url"));
			$("#progress_bar").css("width", "80%");
			setTimeout(function(){
			    $("#progress_text").text("Ready to go!");
			    $("#progress_bar").css("width", "100%");
			}, 2000);
		    }, 2000);
		}, 2000);
	    }, 2000);
	}, 2000);
    });
}