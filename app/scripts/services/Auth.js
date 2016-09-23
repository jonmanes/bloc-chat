(function() {
  function Auth($scope, $firebaseAuth) {
    $scope.authObj = $firebaseAuth();
  }


  angular
    .module('blocChat')
    .factory('Auth', ['$scope', '$firebaseAuth', Auth]);
})();
