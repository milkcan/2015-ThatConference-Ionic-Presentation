angular.module('spotit').controller('ViewCtrl', function($scope, $stateParams, $ionicListDelegate,Tickets) {
    $scope.tickets = Tickets;
});