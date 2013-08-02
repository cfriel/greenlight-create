Meteor.Router.add({
    '/create': function(path)
    {
	return 'create_page';
    }
});

Template.create_page.rendered = function(){
    $('#left-navbar').affix();
}