(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var module;

console.log('Hello');

console.log("jQuery v" + ($().jquery));

module = require('./module');

module.loadThatImage();



},{"./module":2}],2:[function(require,module,exports){
module.exports = {
  loadThatImage: function() {
    console.log('Loading the image');
    return imagesLoaded('body', function() {
      console.log('Image finished loading');
      return $('img').fadeIn();
    });
  }
};



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWtlLm1hcnRpbi9Eb2N1bWVudHMvc3R1ZmYvZGVtby1ucG0tZ3VscC1icm93c2VyaWZ5LWNvZmZlZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbHVrZS5tYXJ0aW4vRG9jdW1lbnRzL3N0dWZmL2RlbW8tbnBtLWd1bHAtYnJvd3NlcmlmeS1jb2ZmZWUvc3JjL2FwcC5jb2ZmZWUiLCIvVXNlcnMvbHVrZS5tYXJ0aW4vRG9jdW1lbnRzL3N0dWZmL2RlbW8tbnBtLWd1bHAtYnJvd3NlcmlmeS1jb2ZmZWUvc3JjL21vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLE1BQUE7O0FBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLENBQUEsQ0FBQTs7QUFBQSxPQUNPLENBQUMsR0FBUixDQUFhLFVBQUEsR0FBUyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsTUFBTCxDQUF0QixDQURBLENBQUE7O0FBQUEsTUFHQSxHQUFTLE9BQUEsQ0FBUSxVQUFSLENBSFQsQ0FBQTs7QUFBQSxNQUlNLENBQUMsYUFBUCxDQUFBLENBSkEsQ0FBQTs7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUVFO0FBQUEsRUFBQSxhQUFBLEVBQWUsU0FBQSxHQUFBO0FBQ2IsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLG1CQUFaLENBQUEsQ0FBQTtXQUNBLFlBQUEsQ0FBYSxNQUFiLEVBQXFCLFNBQUEsR0FBQTtBQUNuQixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksd0JBQVosQ0FBQSxDQUFBO2FBQ0EsQ0FBQSxDQUFFLEtBQUYsQ0FBUSxDQUFDLE1BQVQsQ0FBQSxFQUZtQjtJQUFBLENBQXJCLEVBRmE7RUFBQSxDQUFmO0NBRkYsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zb2xlLmxvZyAnSGVsbG8nXG5jb25zb2xlLmxvZyBcImpRdWVyeSB2I3skKCkuanF1ZXJ5fVwiXG5cbm1vZHVsZSA9IHJlcXVpcmUgJy4vbW9kdWxlJ1xubW9kdWxlLmxvYWRUaGF0SW1hZ2UoKSIsIm1vZHVsZS5leHBvcnRzID1cblxuICBsb2FkVGhhdEltYWdlOiAtPlxuICAgIGNvbnNvbGUubG9nICdMb2FkaW5nIHRoZSBpbWFnZSdcbiAgICBpbWFnZXNMb2FkZWQgJ2JvZHknLCAtPlxuICAgICAgY29uc29sZS5sb2cgJ0ltYWdlIGZpbmlzaGVkIGxvYWRpbmcnXG4gICAgICAkKCdpbWcnKS5mYWRlSW4oKSJdfQ==
