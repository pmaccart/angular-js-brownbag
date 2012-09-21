'use strict';

angular.module('brownbag', []).config(
    ['$routProvider', function ($routeProvider) {
        $routeProvier.when('/messages', {templateUrl: 'partials/messages.html', controller: InboxCtrl})
            .when('/messages/:messageId', {templateUrl: 'partials/message.html', controller: MessageCtrl})
            .otherwise({redirectTo: '/messages'});

    }]);