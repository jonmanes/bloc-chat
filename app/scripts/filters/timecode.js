(function() {
     function timecode() {
         return function(timestamp) {
             var unixTime = new Date(timestamp).getTime();
             var now = new Date(unixTime);
             ampm= 'am', 
             hour= now.getHours(), 
             minute= "0" + now.getMinutes()
             if (hour >= 12){
                 if (hour > 12) {
                     hour -= 12;
                 }
                 ampm= 'pm';
             }

             return  hour + ':' + minute.substr(-2)+ '' + ampm;
         }
     }
 
     angular
         .module('blocChat')
         .filter('timecode', timecode);
 })();