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

window.onload=function(){
  $("#godown").click(function (event) {
      $('main').animate({ scrollTop: '500px' }, "slow");
  });
};

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



var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
