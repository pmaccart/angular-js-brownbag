'use strict';

/* jasmine specs for controllers go here */

describe('InboxCtrl', function () {
    it('should create a  model with the username and messages', function () {
        var scope = {},
            ctrl = new InboxCtrl(scope);

        expect(scope.username).toBe('Phil');
        expect(scope.messages.length).toBe(7);
    });
});

