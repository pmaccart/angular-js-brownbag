'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Angular JS Brownbag App', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/index.html');
    });

    it('should display an inbox with 7 messages', function () {
        expect(repeater('div.inbox .message').count()).toBe(7);
    });

    it('should filter the messages by the query input', function () {

        input('query').enter('studio');
        expect(repeater('div.inbox .message').count()).toBe(4);
        expect(repeater('div.inbox .message').column('message.from')).toEqual([
            'Studio Mail Server',
            'Studio Mail Server',
            'Studio Mail Server',
            'Studio Mail Server'
        ]);
    });

    it('should sort the messages by the selected sort field', function () {
        element('div.from a').click();
        pause();
        expect(repeater('div.inbox .message').column('message.from')).toEqual([
            'Anthony Lee',
            'Liz Tobin',
            'Studio Mail Server',
            'Studio Mail Server',
            'Studio Mail Server',
            'Studio Mail Server',
            'Tom Snapp'
        ]);

    });
});
