(function() {
  function CookieCtrl($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

        var modalInstance = $uibModal.open({
            templateUrl: '/templates/newUserName.html',
            controller: function($scope, $uibModalInstance) {
                $scope.create = function() {
                    $uibModalInstance.close($scope.userName);
                };
            },
                backdrop  : 'static',
                keyboard  : false,
                size: 'sm'
            });

            modalInstance.result.then(function(name) {
                $cookies.put('blocChatCurrentUser', name);
            });

    } else {
        alert("Welcome back "+currentUser);
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', CookieCtrl]);
})();
