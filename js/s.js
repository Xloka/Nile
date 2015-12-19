$(document).ready(function (){
	//$(".dropdown-button").dropdown();
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: '.mdl-layout__content' // optional scroll container selector, otherwise use window
  }
);
wow.init();
});
var app = angular.module('nile',['ngRoute']);
var auth = false;
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl:'pages/home.html'
  })
  .when('/about',{
    templateUrl:'pages/about.html'
  })
  .when('/nile',{
      templateUrl:'pages/nile.html'
  })
  .when('/creatures',{
      templateUrl:'pages/creatures.html'
  })
  .when('/sights',{
      templateUrl:'pages/sights.html'
  })
  .when('/news',{
      templateUrl:'pages/news.html'
  })
  .when('/contact',{
      templateUrl:'pages/contact.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});
app.controller('pagecontroller');
