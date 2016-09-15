(function() {
  function Room($firebaseArray) {
    var roomRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(roomRef);
    var messageRef = firebase.database().ref().child("messages");
      
    return {
        all: rooms,
        addRoom: function (roomName) {
          rooms.$add(roomName);
        },
        getMessages: function (roomId){
			return $firebaseArray(messageRef.orderByChild("roomId").equalTo(roomId));
        }
        
    };
      
  };
    

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();