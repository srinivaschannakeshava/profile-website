/**
 * http://usejsdoc.org/
 */

var profileApp = angular.module("profile", [ 'ngRoute', 'ngMaterial',
		'ngAnimate' ]);

profileApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/profile', {
		templateUrl : 'profile.html',
		controller : 'profileCtrl'
	}).when('/resume', {
		templateUrl : 'resume.html',
		controller : 'resumeCtrl'
	}).when('/portfolio', {
		templateUrl : 'portfolio.html',
		controller : 'portfolioCtrl'
	}).when('/blog', {
		templateUrl : 'blog.html',
		controller : 'blogCtrl'
	}).when('/contact', {
		templateUrl : 'contact.html',
		controller : 'contactCtrl'
	}).otherwise({
		templateUrl : 'profile.html',
		controller : 'profileCtrl'
	});
} ]).run(function($rootScope) {
	$rootScope.selected = "profile";
})