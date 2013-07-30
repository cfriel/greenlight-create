Meteor.startup(function(){

    Meteor.subscribe("users");

});

Template.select_users.email = function()
{
    return this.emails[0].address;
}

Template.select_users.results = function()
{
    return Meteor.users.find();
}