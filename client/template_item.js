Template.site_template_item.events({
    'click .site_template_item' : function(e,t)
    {
	$('.site_template_item').removeClass("selected");
	$(e.target).parent().addClass("selected");
	Greenlight.log(t);
    }
});

Template.site_template_item.rendered = function()
{
    Holder.run();
}

Template.site_template_item.description = function()
{
    return '';
}
