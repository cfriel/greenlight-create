Template.select_template.events({
    'click #next' : function(e,t)
    {
	$('#template_container .selected').each(function(){
	    Session.set("selected_template", $(this).attr("data-id"));
	});

	Meteor.Router.to('/create/select_collections');
    }
});

Template.select_template.rendered = function(){
    $('#template_container').masonry(
	{ 
	    columnWidth: 110
	}
    );
}

Template.select_template.results = function () {
    Pagination.perPage(10);
    Pagination.currentPage(1);
    
    return Pagination.collection(SiteTemplates.find({}).fetch());
}

Template.select_template.pagination = function(){
    Pagination.perPage(10);
    Pagination.currentPage(Session.get("choose_template_page"));
    var numRecords = SiteTemplates.find({}).count();

    if(numRecords != 0)
    {
	return Pagination.links("/create/choose_template", numRecords);
    }
}
