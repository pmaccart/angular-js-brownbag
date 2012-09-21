'use strict';

/* jasmine specs for controllers go here */

describe('InboxCtrl', function () {
    var messages, scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        messages = [
            {id: 3, from: "Sender 3", subject: "Subject 3", date: "Jan 3, 2012"},
            {id: 2, from: "Sender 2", subject: "Subject 2", date: "Jan 2, 2012"},
            {id: 4, from: "Sender 4", subject: "Subject 4", date: "Jan 4, 2012"},
            {id: 1, from: "Sender 1", subject: "Subject 1", date: "Jan 1, 2012"}
        ];

        $httpBackend.expectGET('data/messages.json').respond(messages);

        scope = $rootScope.$new();
        ctrl = $controller(InboxCtrl, {$scope: scope});
    }))

    it('should create a  model with the username and sort by field', function () {
        expect(scope.username).toBe('Phil');
        expect(scope.sortBy).toBe('date');
    });

    it('should fetch messages from data/messages.json', function () {
        expect(scope.messages).toBeUndefined();
        $httpBackend.flush();
        expect(scope.messages).toEqual(messages);
    })
});

