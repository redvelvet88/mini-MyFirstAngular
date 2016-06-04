angular.module('friendsList').controller("mainCtrl", function($scope) {
  $scope.friends = ["Amber Kennedy", "Sara Hawkley", "Rylee Rollins"];

  $scope.addFriend = function(){
    $scope.friends.push($scope.newFriendsName);
    $scope.newFriendsName = '';
    alert("hello");
  };

  console.log($scope);
});
