var App = angular.module('app', []);

App.run(function($rootScope) {
    $rootScope.socket = io.connect(window.location.protocol + "//" + window.location.hostname + ":9998");
});


App.controller('mainCtrl', function($scope) {

    $scope.socket.on('new:data', function(data) {
        $scope.hello = data;
        $scope.$digest();
        console.log('got:', data);
    });

});
