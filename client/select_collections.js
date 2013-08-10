var c = undefined;

Template.select_collections.rendered = function()
{
    var select2 = $("#c").select2({
        
	minimumInputLength: 1,
	multiple: true,
	
        query: function (query) {	    

	    var data = {results: []}, i, j, s;
	    var datasets = Greenlight.Dataset.Datasets.find().fetch();
	    
	    for(var i = 0; i < datasets.length; i++)
	    {
		var collection = datasets[i].collection;
		var database = datasets[i].database;
		
		if(query.term.length == 0 || 
		   item.toUpperCase().indexOf(query.term.toUpperCase()) >= 0 ){

		    data.results.push({id: datasets[i]._id, text: 
				       database + "." + collection });
		}
	    }
	    
	    query.callback(data);
	}
    });
    
    if(!c)
    {
	c = $('#c');
		
	$('#c').on("change", function(e) { 
	    console.log(
		"change "+
		    JSON.stringify({val:e.val, added:e.added, removed:e.removed})
	    );
	});
    }
}

Template.select_collections.created = function()
{
    Pagination.perPage(10);

    Pagination.style('bootstrap');
    Session.set("collection_page", 1);
}

Template.select_collections.results = function () 
{
    Pagination.currentPage(Session.get("collection_page"));    
    
    return Pagination.collection(
	Greenlight.Dataset.Datasets.find({}).fetch()
    );
}

Template.select_collections.pagination = function(){

    var currentPage = Session.get("collection_page");
    var count = Greenlight.Dataset.Datasets.find().count();
    
    if(currentPage && count > 0)
    {
	return Pagination.links(
	    '#select_collections', count, 
	    {currentPage: currentPage, perPage: 10}
	);
    }
}
