Meteor.subscribe("directory");

Meteor.startup(function(){

});

Template.select_users.results = function()
{
    return Meteor.users.find();
}

var u = undefined;

Template.select_users.rendered = function()
{
	var select2 = $("#u").select2({
            minimumInputLength: 1,
	    multiple: true,
	    
            query: function (query) {	    
		var data = {results: []}, i, j, s;

		var users = Meteor.users.find().fetch();

		for(var i = 0; i < users.length; i++)
		{
		    var emails = users[i].emails;
		    var user = users[i];

		    for(var j = 0; j < emails.length; j++)
		    {   
			var email = emails[j];
			var keys = Object.keys(email);
			
			for(var k = 0; k < keys.length; k++)
			{
			    var key = keys[k];
			    var item = email[key];

			    if(item && typeof(item) == "string")
			    {
				if(query.term.length == 0 || item.toUpperCase().indexOf(query.term.toUpperCase()) >= 0 ){
				    data.results.push({id: user._id, text: email.address });
				}
			    }
			}	    
		    }
		}

		query.callback(data);
	    }
	});


    if(!u)
    {

	u = $('#u');

	$('#u').on("change", function(e) { 
	    console.log("change "+JSON.stringify({val:e.val, added:e.added, removed:e.removed}));
	    // window.location.href = e.val;
	});

    }
}
