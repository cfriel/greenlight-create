Meteor.startup(function(){
    
    Meteor.subscribe("databases");

});

var c = undefined;

Template.select_collections.rendered = function()
{
	var select2 = $("#c").select2({
            minimumInputLength: 1,
	    multiple: true,
	    
            query: function (query) {	    
		var data = {results: []}, i, j, s;

		var dbs = Databases.find().fetch();

		for(var i = 0; i < dbs.length; i++)
		{
		    var collections = dbs[i].collections;
		    var database = dbs[i];

		    for(var j = 0; j < collections.length; j++)
		    {   
			var collection = collections[j];
			var keys = Object.keys(collection);
			
			for(var k = 0; k < keys.length; k++)
			{

			    var key = keys[k];
			    var item = collection[key];

			    if(item && typeof(item) == "string")
			    {
				if(query.term.length == 0 || item.toUpperCase().indexOf(query.term.toUpperCase()) >= 0 ){
				    data.results.push({id: database.name + "." + collection.name, text: collection.name });
				}
			    }
			}	    
		    }
		}

		query.callback(data);
	    }
	});

    if(!c)
    {
	c = $('#c');


	$('#c').on("change", function(e) { 
	    console.log("change "+JSON.stringify({val:e.val, added:e.added, removed:e.removed}));
	    // window.location.href = e.val;
	});
    }
}

Template.select_collections.events({
    'click #create' : function(e,t)
    {
	Meteor.Router.to('/create/select_url');
    }
});

Template.select_collections.created = function()
{
    Pagination.perPage(10);
    Pagination.style('bootstrap');
    Session.set("collection_page", 1);
}

Template.select_collections.results = function () 
{
    Pagination.currentPage(Session.get("collection_page"));    
    return Pagination.collection(Databases.find({}).fetch());
}

Template.select_collections.pagination = function(){
    var currentPage = Session.get("collection_page");
    var count = Databases.find().count();
    
    if(currentPage && count > 0)
    {
	return Pagination.links('#select_collections', count, {currentPage: currentPage, perPage: 10});
    }
}
