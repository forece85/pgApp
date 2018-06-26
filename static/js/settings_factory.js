app.factory('settingsFactory', [ '$http', function($http) {
	var baseUrl = "/user/settings";
	return {
		getSettings : function() {
			return $http.post(baseUrl + "/getUserSettings");
		},
		saveSettings : function(data) {
			return $http.post(baseUrl + "/savesettings", data);
		}
	}
} ]);