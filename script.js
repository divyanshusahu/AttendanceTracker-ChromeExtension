$(document).ready(function(){
	$("#addCoursesDemo").click(function(){
		$("#addCoursesDemo").fadeOut(1);
		$("#addCoursesText").fadeIn();
		$("#addCoursesButton").fadeIn();
		$('#closeButton').fadeIn();
	});
});

// app.js 
var app = angular.module("myApp", []);

// mainController.js
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Keep track of your attendence'; 
  $scope.plusOne = function(index) { 
  	$scope.courses[index].noOfAbsents += 1; 
  	localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores no of absent locally
	};

	$scope.saved = localStorage.getItem('courses'); // get locally saved variable
	$scope.courses = (localStorage.getItem('courses')!==null) ? JSON.parse($scope.saved) : [ ]; // conversion to display correctly
	localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores courses array locally
	$scope.addCourse = function() {
		var x = document.getElementById('addCoursesText').value;
		$scope.courses.push({name:x,noOfAbsents:0});
		document.getElementById('addCoursesText').value = "";
		localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores courses array locally
	};
	$scope.close = function() {
		$("#addCoursesText").fadeOut(1);
		$("#addCoursesButton").fadeOut(1);
		$('#closeButton').fadeOut(1);
		$("#addCoursesDemo").fadeIn();
	};

}]); 

 