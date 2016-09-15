(function() {
    function HomeCtrl(Room) {  
        this.room = Room;
        
        this.selectRoom = function(room) {
			this.selectedRoom = room;
            this.messages = Room.getMessages(this.selectedRoom.$id);
        };
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

 })();