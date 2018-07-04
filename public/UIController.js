/**
 * Created by sleisangthem on 6/26/18.
 */

var app = angular.module('stratusHome', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider.
    when('/gendataHistory', {
        templateUrl: 'gendataHistory',
        controller: 'gendataHistoryCtrl'
    })
    .when('/gendataExecute', {
        templateUrl: 'gendataExecute',
        controller: 'gendataExecuteCtrl'
    })

})
app.controller('indexCtrl', function ($scope, $window, $http) {
        console.log("ddfgdfgdfgdg");
        $scope.onLogin = function (hostName, userName, password) {
            $window.location.href = '/home';
            console.log("Hiiiiiii");
        }

    })
app.controller('homeCtrl', function ($scope, $window, $http) {
    console.log("ddfgdfgdfgdg");


})
app.controller('gendataHistoryCtrl', function ($scope, $window, $http) {
    console.log("=============gen data control");


})
app.controller('gendataExecuteCtrl', function ($scope, $window, $http) {
    console.log("=============gen data execute control");

     $scope.onSubmit = function (dataSize) {
         console.log('Executing tpc-ds with data size :' +dataSize );
         $http.post('/executeCmd').success(function(response){
             console.log("response data " +response);
         })
         
     }

})
