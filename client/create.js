Meteor.Router.add({
    '/create': function(path)
    {
	return 'create_page';
    }
});

Template.create_page.rendered = function(){

    $('#left-navbar').affix();

    var $root = $('html, body');

    $('a').click(function() {
	var href = $.attr(this, 'href');
	window.location.hash = href;
	$root.animate({
            scrollTop: $(href).offset().top
	}, 500, function () {
            
	});
	return false;
    });

}