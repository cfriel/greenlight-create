Meteor.startup(function(){
    
    Meteor.subscribe("databases");

});

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
