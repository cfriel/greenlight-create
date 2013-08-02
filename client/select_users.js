Meteor.subscribe("directory");

Meteor.startup(function(){

});

Meteor.Router.add({
    '/create/select_users/:page' : function(page)
    {
	Session.set("user_page", parseInt(page));

	return 'create_page';
    }
});

Template.select_users.results = function()
{
    Pagination.currentPage(Session.get("user_page"));    
    return Pagination.collection(Meteor.users.find().fetch());
}

Template.select_users.pagination = function () {
    // Pagination.links(prependRoute, cursorCount, options);
    var currentPage = Session.get("user_page");
    var count = Meteor.users.find().count();

    if(currentPage && count > 0)
    {
	return Pagination.links('/create/select_users', count, {currentPage: currentPage, perPage: 10});
    }
}

var u = undefined;

Template.select_users.created = function()
{
    Pagination.perPage(10);
    Pagination.style('bootstrap');
    Session.set("user_page", 1);
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
	});
    }
}
