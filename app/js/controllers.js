'use strict';

/* Controllers */


function InboxCtrl($scope) {

    $scope.username = "Phil";
    $scope.messages = [
        {checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 9, 12, 14)},
        {checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 9, 28, 22)},
        {checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 10, 5, 40)},
        {checked: false, status: "unread", from: "Studio Mail Server",subject: "Commit Build Failed", date: new Date(2012, 9, 15, 9, 53, 40)},
        {checked: false, status: "unread", from: "Liz Tobin", subject: "Enter Your Time", date: new Date(2012, 9, 15, 11, 34, 19)},
        {checked: false, status: "unread", from: "Anthony Lee", subject: "Enter JIRA Hours", date: new Date(2012, 9, 15, 7, 45, 0)},
        {checked: false, status: "unread", from: "Tom Snapp", subject: "Feeding the Bulldog", date: new Date(2012, 9, 15, 12, 32, 45)}
    ];

}
InboxCtrl.$inject = ["$scope"];
