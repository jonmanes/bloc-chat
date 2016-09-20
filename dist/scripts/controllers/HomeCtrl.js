(function() {
    function HomeCtrl(Room, Message) {  
        this.room = Room;
        
        this.selectRoom = function(room) {
			this.selectedRoom = room;
            this.messages = Room.getMessages(this.selectedRoom.$id);
        };
        
        this.sendMessage = function(newMessage) {
            Message.send(newMessage, this.selectedRoom.$id);
        }
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);

 })();