var name = "create";
var version = "1.0";

Meteor.startup(function(){
    
    console.log("loading create package");
    
    Greenlight.register_template(name, version);
    
});