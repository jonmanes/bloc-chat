(function() {
    function ModalCtrl($scope, Room, $uibModal) {
        this.room = Room;

        var modalControl = function ($scope, $uibModalInstance) {

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.create = function(selectedAction) {
                $uibModalInstance.close(selectedAction);
            };
        };

        this.openAddRoomModal = function() {

            var modalInstance = $uibModal.open({
                templateUrl: 'addRoomModal.html',
                controller: modalControl,
                size: 'sm',
            });

            modalInstance.result.then(function(name) {
                    Room.addRoom(name);
                });
        };

    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', '$uibModal', ModalCtrl]);

 })();
