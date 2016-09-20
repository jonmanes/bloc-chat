(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    function timeNow(){
        var now= new Date(), 
        ampm= 'am', 
        hour= now.getHours(), 
        minute= now.getMinutes()
        if (hour >= 12){
            if (hour > 12) {
                hour -= 12;
            }
            ampm= 'pm';
        }

        return  hour + ':' + minute + '' + ampm;
    }

    return {
      send: function(newMessage, currentRoom) {
          
        messages.$add({
            content: newMessage,
            roomId: currentRoom,
            sentAt: timeNow(),
            username: $cookies.get('blocChatCurrentUser')
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();