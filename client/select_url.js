Template.select_url.events({
    'click #create' : function(e,t)
    {
	Meteor.Router.to('/create/pending');
	Session.set("selected_url", $("#prependedInput").val());
    }
});