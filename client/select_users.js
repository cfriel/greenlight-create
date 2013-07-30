Meteor.subscribe("directory");

Meteor.startup(function(){

});

Template.select_users.results = function()
{
    return Meteor.users.find();
}

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
				data.results.push({id: i+"_"+j+"_"+k, text: email.address });
                            }
			}
		    }	    
		}
	    }

	    query.callback(data);
	}
    });

    $('#u').on("change", function(e) { 
	console.log("change "+JSON.stringify({val:e.val, added:e.added, removed:e.removed}));
	// window.location.href = e.val;
    });
}
