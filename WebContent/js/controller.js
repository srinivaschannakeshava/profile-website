/**
 * http://usejsdoc.org/
 */
profileApp.controller('profileCtrl', function($scope, $rootScope) {
	$rootScope.selected = "profile";
	$scope.pageClass = 'page-profile';
});

profileApp.controller('blogCtrl', function($scope, $rootScope) {
	$rootScope.selected = "blog";
	$scope.pageClass = 'page-blog';
});

profileApp.controller('contactCtrl', function($scope, $rootScope) {
	$rootScope.selected = "contact";
	$scope.pageClass = 'page-contact';
	function initialize() {
		var myLatLng = new google.maps.LatLng(12.996419, 77.693379);
		var mapProp = {
			center : myLatLng,
			zoom : 16,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("locMap"),
				mapProp);
		var infowindow = new google.maps.InfoWindow({
			content : 'Singainpalya, Bengaluru, India'
		});
		var marker = new google.maps.Marker({
			position : myLatLng,
			map : map,
			title : 'Singainpalya, Bengaluru, India'
		});
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
	}
	initialize();
});

profileApp.controller('portfolioCtrl', function($scope, $rootScope) {
	$rootScope.selected = "portfolio";
	$scope.pageClass = 'page-portfolio';
});

profileApp.controller('resumeCtrl', function($scope, $rootScope) {
	$rootScope.selected = "resume";
	$scope.pageClass = 'page-resume';
});