'use strict';

/* Controllers */


function InboxCtrl($scope) {

    $scope.username = "Phil";
    $scope.messages = [
        {id: 1, checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 9, 12, 14)},
        {id: 2, checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 9, 28, 22)},
        {id: 3, checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 10, 5, 40)},
        {id: 4, checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 9, 53, 40)},
        {id: 5, checked: false, status: "unread", from: "Liz Tobin", subject: "Enter Your Time", date: new Date(2012, 9, 15, 11, 34, 19)},
        {id: 6, checked: false, status: "unread", from: "Anthony Lee", subject: "Enter JIRA Hours", date: new Date(2012, 9, 15, 7, 45, 0)},
        {id: 7, checked: false, status: "unread", from: "Tom Snapp", subject: "Feeding the Bulldog", date: new Date(2012, 9, 15, 12, 32, 45)}
    ];

    $scope.sortFields = [
        "status", "from", "subject", "date"
    ];

    $scope.sortBy = "date";

}
InboxCtrl.$inject = ["$scope"];
