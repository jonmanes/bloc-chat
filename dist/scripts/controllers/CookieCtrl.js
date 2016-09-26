(function() {
  function CookieCtrl(Auth, $cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

        var modalInstance = $uibModal.open({
            templateUrl: '/templates/newUserName.html',
            controller: function($scope, $uibModalInstance) {
                $scope.login = function(userName, password) {
                    Auth.loginUser(userName, password);
                    firebase.auth().onAuthStateChanged(function(user) {
                      if (user) {
                        $uibModalInstance.close();
                      };
                    });
                };
                $scope.create = function(userName, password) {
                    Auth.createNewAccount(userName, password);
                };

            },
                backdrop  : 'static',
                keyboard  : false,
                size: 'sm'
            });

            modalInstance.result.then(function() {
                $cookies.put('blocChatCurrentUser', firebase.auth().currentUser.email);
            });

    } else {
        alert("Welcome back "+currentUser);
    }
  }

  angular
    .module('blocChat')
    .run(['Auth', '$cookies', '$uibModal', CookieCtrl]);
})();
