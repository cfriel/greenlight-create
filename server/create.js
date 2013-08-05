var name = "create";
var version = "1.0";

create = function(){};

create.prototype = new create();

Create = create.prototype;

Meteor.startup(function(){
    
    console.log("loading create package");
    
    Greenlight.register_template(name, version, Create);
    
});