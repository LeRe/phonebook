var phoneApp = angular.module('phoneApp', []);
phoneApp.controller('phoneListController', function phoneListController($scope, $http) {
    $http.get('/json/personlist').then((response) => { $scope.persons = response.data });
    $scope.openPerson = function (id) {
        $('#personModal').modal();
        //alert('id = ' + id);
    }
});