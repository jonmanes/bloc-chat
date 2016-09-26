(function() {
  function Auth($firebaseAuth) {

    function loginUser (userName, password) {
        firebase.auth().signInWithEmailAndPassword(userName, password).then(function(firebaseUser){
            alert("Signed in as: "+firebaseUser.email);
        }).catch(function(error) {
            alert("Invalid Login: "+error.message);
        });
    }
    function createNewAccount(userName, password) {
        firebase.auth().createUserWithEmailAndPassword(userName, password).then(function(firebaseUser){
            alert("New account created for: "+firebaseUser.email);
        }).catch(function(error) {
            alert("error: "+error.message);
        });
    }


    return{
        loginUser: loginUser,
        createNewAccount: createNewAccount
    };
  }


  angular
    .module('blocChat')
    .factory('Auth', ['$firebaseAuth', Auth]);
})();
