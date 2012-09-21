'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Angular JS Brownbag App', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should display a hello message when the page is loaded', function() {
    expect(element("body.h2")).toBe("Hello Slalom Custom AppDev!");

  });


});
