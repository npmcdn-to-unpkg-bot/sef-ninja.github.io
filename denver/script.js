
var plan = null;
var app = angular.module("app", []);
app.controller("HelloController", function($scope, $http) {
	$scope.message = "Denver Trip Plan";
    $http.get('plan.json').success(function(data){
        plan = data;  
        $scope.days = data.days;
    }); 
});