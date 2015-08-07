angular.module('spotit').controller('CreateCtrl', 
  function($scope, $window, $stateParams, $state, $ionicListDelegate, Tickets) {
    $scope.ticket = new Ticket();
    $scope.tickets = Tickets;

    $window.navigator.geolocation.getCurrentPosition(function(position){
      $scope.ticket.location = "Lat: " + position.coords.latitude + "\nLong: " + position.coords.longitude; 
      $scope.$apply();
    }); 

    $scope.create = function(){
      $scope.tickets.$add({
        'urgency': $scope.ticket.urgency,
        'firstName': $scope.ticket.firstName,
        'lastName': $scope.ticket.lastName,
        'location': $scope.ticket.location,
        'phoneNumber': $scope.ticket.phoneNumber,
        'notes': $scope.ticket.notes,
        'createdDate': $scope.ticket.createdDate.toString()
      });
      $state.go('app.view');
    };
});