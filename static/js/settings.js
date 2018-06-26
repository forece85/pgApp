app.controller('settingsController', [
		'$scope',
		'settingsFactory',
		'$timeout',
		'toastr',
		function($scope, settingsFactory, $timeout,toastr) {

			$scope.isRead = true;
			$scope.settings = {
				logstashHostname : '',
				logstashProtocol : '',
				logstashToken : '',
				filebeatHomePath : '',
				filebeatConfigPath : '',
				logstashPortnumber : ''
			};
			$scope.getsettings = function() {
				settingsFactory.getSettings().then(function(response) {
					$scope.settings = angular.copy(response.data);
				}, function(err) {

				});
			};

			$scope.getsettings();
			$scope.save = function() {
				if ($scope.doValidation()) {
					if ($scope.doValidation()) {
						settingsFactory.saveSettings($scope.settings).then(
								function(response) {
									if (response.data.status) {
										toastr.success("Updated successfully")
									}
								}, function(err) {
									toastr.warning("Please try again later!...")
								});
					} else {

						toastr.warning("Please try again later!...")
					}
				} else {
					toastr.info("All fields are mandatory")
				}
			};

			$scope.changePortnumber = function() {
				if ($scope.settings.logstashProtocol === 'HTTP') {
					$scope.settings.logstashPortnumber = '80';
				} else if ($scope.settings.logstashProtocol === 'TCP') {
					$scope.settings.logstashPortnumber = '21';
				} else if ($scope.settings.logstashProtocol === 'Filebeat') {
					$scope.settings.logstashPortnumber = '5044';
				} else if ($scope.settings.logstashProtocol === 'others') {
					$scope.isRead = false;

				}
			}
			$scope.doValidation = function() {
				if ($scope.settings.logstashProtocol === undefined) {
					return false;
				} else {
					return true;
				}
			}
		} ]);