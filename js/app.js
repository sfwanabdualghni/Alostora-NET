// ALOSTORA Hybrid App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
	'ionic',
	'ngCordova',
	'starter.controllers',
	'starter.services',
	'starter.utils'
])

.run(function($rootScope, $ionicPlatform, $cordovaStatusbar, $localstorage, $cordovaNetwork, $cordovaToast) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			// StatusBar.styleDefault();
			$cordovaStatusbar.styleHex('#01579b');
		}

		// listen for Offline event
	    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
	      var offlineState = networkState;
			$cordovaToast.showShortBottom('Check your connection!').then(function(success) {
			    // success
			}, function (error) {
			    // error
			});
	    });
	});
})

.config(function($ionicConfigProvider) {
	if (!ionic.Platform.isAndroid()) {
		$ionicConfigProvider.scrolling.jsScrolling(true);
	}
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})

	.state('app.search', {
		url: "/search",
		views: {
			'menuContent': {
				templateUrl: "templates/search.html"
			}
		}
	})

	.state('app.chat', {
		url: "/chat",
		views: {
			'menuContent': {
				templateUrl: "templates/chat.html",
			}
		}
	})

	.state('app.social', {
		url: "/social",
		views: {
			'menuContent': {
				templateUrl: "templates/social.html",
			}
		}
	})

	.state('app.manager', {
		url: "/manager",
		views: {
			'menuContent': {
				templateUrl: "templates/manager.html",
			}
		}
	})

	.state('app.browser', {
		url: "/browser",
		views: {
			'menuContent': {
				templateUrl: "templates/browser.html",
			}
		}
	})

	.state('app.tools', {
		url: "/tools",
		views: {
			'menuContent': {
				templateUrl: "templates/tools.html",
			}
		}
	})

.state('app.media', {
		url: "/media",
		views: {
			'menuContent': {
				templateUrl: "templates/media.html",
			}
		}
	})

.state('app.about', {
		url: "/about",
		views: {
			'menuContent': {
				templateUrl: "templates/about.html",
			}
		}
	})

.state('app.google', {
		url: "/google",
		views: {
			'menuContent': {
				templateUrl: "templates/google.html",
			}
		}
	})

.state('app.learning', {
		url: "/learning",
		views: {
			'menuContent': {
				templateUrl: "templates/learning.html",
			}
		}
	})

.state('app.sfwan', {
		url: "/sfwan",
		views: {
			'menuContent': {
				templateUrl: "templates/sfwan.html",
			}
		}
	})

.state('app.facebook', {
		url: "/facebook",
		views: {
			'menuContent': {
				templateUrl: "templates/developer/facebook.html",
			}
		}
	})

.state('app.twitter', {
		url: "/twitter",
		views: {
			'menuContent': {
				templateUrl: "templates/developer/twitter.html",
			}
		}
	})

.state('app.googleplus', {
		url: "/googleplus",
		views: {
			'menuContent': {
				templateUrl: "templates/developer/googleplus.html",
			}
		}
	})

.state('app.blog', {
		url: "/blog",
		views: {
			'menuContent': {
				templateUrl: "templates/developer/blog.html",
			}
		}
	})

.state('app.myapp', {
		url: "/myapp",
		views: {
			'menuContent': {
				templateUrl: "templates/developer/myapp.html",
			}
		}
	})

.state('app.github', {
		url: "/github",
		views: {
			'menuContent': {
				templateUrl: "templates/developer/github.html",
			}
		}
	})

	.state('app.top', {
		url: "/top",
		views: {
			'menuContent': {
				templateUrl: "templates/top.html",
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/top');
});
