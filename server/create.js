var name = "create";
var version = "1.0";

create = function(){};

create.prototype = new create();

create.prototype.metadata = function()
{
    
    return {
	description : "The create package provides the functionality surfaced in the site creation component of greenlight.  It allows users to create new instances of site templates rooted at chosen URLs for custom views of data or collaboaration areas."
    };
}();


Greenlight.Packages.Create = create.prototype;

Meteor.startup(function(){
    
    Greenlight.log("loading create package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Create);
    
});