(function() {
    function HomeCtrl() {  
        this.heroTitle = "Let's Chat";
    }
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);

 })();