'use strict';

/* jasmine specs for controllers go here */

describe('InboxCtrl', function () {
    it('should create a username model with the user name', function () {
        var scope = {},
            ctrl = new InboxCtrl(scope);

        expect(scope.username).toBe('Phil');
    });
});