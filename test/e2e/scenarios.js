'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Angular JS Brownbag App', function () {

    describe('Inbox view', function () {
        beforeEach(function () {
            browser().navigateTo('../../app/index.html');
        });

        it('should display an inbox with 7 messages', function () {
            expect(repeater('.inbox .message').count()).toBe(7);
        });

        it('should filter the messages by the query input', function () {

            input('query').enter('studio');
            expect(repeater('.inbox .message').count()).toBe(4);
            expect(repeater('.inbox .message').column('message.from')).toEqual([
                'Studio Mail Server',
                'Studio Mail Server',
                'Studio Mail Server',
                'Studio Mail Server'
            ]);
        });

        it('should sort the messages by the selected sort field', function () {
            element('.from a').click();
            expect(repeater('.inbox .message').column('message.from')).toEqual([
                'Anthony Lee',
                'Liz Tobin',
                'Studio Mail Server',
                'Studio Mail Server',
                'Studio Mail Server',
                'Studio Mail Server',
                'Tom Snapp'
            ]);

        });

        it('should display a message when the subject is clicked', function () {
            element('#message-1 a').click();
            pause();
            expect(browser().location().url()).toBe('/inbox/1');
        });
    });

    describe('Message view', function () {
        beforeEach(function () {
            browser().navigateTo('../../app/index.html#/inbox/1');
        });

        it('should display the from, date, subject, and body fields for a message', function () {
            expect(element('.subject div').text()).toBe('Subject: Commit Build Failed');
            expect(element('.from div').text()).toBe('From: Studio Mail Server');
        });

        it('should navigate back to the inbox on click of the Back To Inbox link', function () {
            element('div.back a').click();
            pause();
            expect(browser().location().url()).toBe('/inbox');
        });
    })

});
