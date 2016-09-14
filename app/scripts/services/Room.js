(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    return {
        all: rooms,
        addRoom: addRoom
    };
      
    function addRoom(roomName) {
          rooms.$add(roomName);
    };
      
  };
    

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();