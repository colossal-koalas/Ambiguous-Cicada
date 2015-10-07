angular.module('kwiki.chat', ['services.socket', 'services.user'])
// .factory('ChatFactory', ['$http', '$rootScope', 'Socket', '$window', function ($http, $rootScope, Socket, $window) {

//   var chatFact = {};

//   chatFact.socket = Socket.connect('chat', $rootScope.user);

//   chatFact.loadChat = function(callback) {
//     this.socket.emit('loadChat', $rootScope.chatRoomId);
//     this.socket.on('message', function(message) {
//       callback(message);
//     });
//   };

//   chatFact.postMessage = function (message, callback) {
//     console.log(message);
//     this.socket.emit('message', message);
//   };

//   return chatFact;
// }])

.controller('ChatController', ['$scope', '$rootScope', 'Socket', 'User', function ($scope, $rootScope, Socket, User) {

  $scope.chatMessages = [];

  $scope.message = {
    username: User.current(),
    text: ''
  };

  $scope.sendMessage = function () {
    if ( $scope.message.text.length ) {
      ChatFactory.postMessage(this.message);
      $scope.chatMessages.unshift({
        userName: this.message.userName,
        text: this.message.text
      });

      $scope.message.text = '';
    }
  };

  $scope.logOut = function () {
    Users.logOut();
  };

}]);
