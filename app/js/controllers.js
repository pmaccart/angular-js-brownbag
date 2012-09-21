'use strict';

/* Controllers */


function InboxCtrl($scope, $http) {

    $scope.username = "Phil";
    $scope.sortFields = [
        "status", "from", "subject", "date"
    ];
    $scope.sortBy = "date";

    $http({
        method:'GET',
        url:'data/messages.json'
    }).success(function (data) {
            console.log(data);
            data.forEach(function(msg) {
                if (msg.date) msg.date =  new Date(Date.parse(msg.date));
            });
            $scope.messages = data;
        }).error(function (data, status) {
            alert("Oops! Status = " + status);
        });

}
InboxCtrl.$inject = ["$scope", "$http"];
