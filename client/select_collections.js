Meteor.startup(function(){
    
    Meteor.subscribe("databases");

});

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
				data.results.push({id: i+"_"+j+"_"+k, text: collection.name });
                            }
			}
		    }	    
		}
	    }

	    query.callback(data);
	}
    });

    $('#c').on("change", function(e) { 
	console.log("change "+JSON.stringify({val:e.val, added:e.added, removed:e.removed}));
	// window.location.href = e.val;
    });
}

Template.select_collections.events({
    'click #create' : function(e,t)
    {
	Meteor.Router.to('/create/select_url');
    }
});

Template.select_collections.results = function () {

    Pagination.perPage(10);
    Pagination.currentPage(1);
    
    return Pagination.collection(Databases.find({}).fetch());
}

Template.select_collections.pagination = function(){
    Pagination.perPage(10);
    Pagination.currentPage(Session.get("collection_list_page"));
    var numRecords = Databases.find({}).count();

    if(numRecords != 0)
    {
	return Pagination.links("/create/collection", numRecords);
    }
}
