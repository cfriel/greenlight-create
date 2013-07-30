Template.user_item.email = function()
{
    return this.emails[0].address;
}

Template.user_item.events({
     'click .select-box' : function(e,t)
    {
	
	$(e.target).parent().parent().toggleClass("selected");
	console.log(t);
    }
});