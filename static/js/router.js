app.config(function($routeProvider) {

	$routeProvider
	.when("/asdf", {
		templateUrl : "templates/asdf.html",
		//controller : "incidentController"
		requiresAuthentication:true,
		permissions: ["asdf","asdf"]
	}).when("/index", {
		templateUrl : "index.html",
		controller : "bodyController"
	});
});