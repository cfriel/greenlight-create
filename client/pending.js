Meteor.startup(function(){
    
    Meteor.subscribe("sites");

});

Template.pending.rendered = function() {
    $('#create').click(function(){
	
	var site = {};

	site.users = [];
	site.collections = [];
	site.url = "";

	var users = $('#u').val().split(",");
	var collections = $('#c').val().split(",");

	site.users = users;
	site.collections = collections;
	
	site.url = $('#prependedInput').val();

	site.template = $('.site_template_item.selected').attr("data-id");

	site.owner = Meteor.userId();

	if(!Sites.findOne({ url : site.url }))
	{
	    Sites.insert(site);

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
	}
	else
	{
	    
	}
    });
}		       
