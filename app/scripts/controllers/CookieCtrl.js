(function() {
  function CookieCtrl($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

        var modalInstance = $uibModal.open({
            templateUrl: '/templates/newUserName.html',
            controller: function($scope, $uibModalInstance) {
                $scope.login = function(userName, password) {
                    firebase.auth().signInWithEmailAndPassword(userName, password).then(function(firebaseUser){
                        alert("Signed in as: "+firebaseUser.email);
                    }).catch(function(error) {
                        alert("Invalid Login: "+error.message);
                    });
                    firebase.auth().onAuthStateChanged(function(user) {
                      if (user) {
                        $uibModalInstance.close(userName);
                      };
                    });
                };
                $scope.create = function(userName, password) {
                    firebase.auth().createUserWithEmailAndPassword(userName, password).then(function(firebaseUser){
                        alert("New account created for: "+firebaseUser.email);
                    }).catch(function(error) {
                        alert("error: "+error.message);
                    });
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
    .run(['$cookies', '$uibModal', CookieCtrl]);
})();
