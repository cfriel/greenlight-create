Template.collection_item.events({
     'click .select-box' : function(e,t)
    {
	
	$(e.target).parent().parent().toggleClass("selected");
	Greenlight.log(t);
    }
});