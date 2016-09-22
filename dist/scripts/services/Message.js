(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
   
    return {
      send: function(newMessage, currentRoom) {
          
        messages.$add({
            content: newMessage,
            roomId: currentRoom,
            sentAt: firebase.database.ServerValue.TIMESTAMP,
            username: $cookies.get('blocChatCurrentUser')
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();