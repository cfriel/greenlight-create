Meteor.Router.add({
    '/create': function(path)
    {
	return 'create_page';
    }
});

Template.create_page.rendered = function(){
    $('#left-navbar').affix();
}

Template.create_page.created = function()
{
    var title = "Create page loaded";
    var description = "The created event of the create page was called";
    var source = "Template.create_page";
    var audience = "";
    var activity = new Greenlight.Activity(title, description, source, audience);

    activity.save();
}
