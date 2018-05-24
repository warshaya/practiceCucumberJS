
import { When, Then, Before, After } from 'cucumber';
import { remote } from 'webdriverio';
import { expect } from 'chai';

import { googlePage } from './pages/google.page';

Before(function (done) {

  const options = {
    desiredCapabilities: {
      browserName: 'chrome'
    }
  }

  this.driver = remote(options).init();

});

When('I navigate to google.com', function () {

  this.googlepage = new googlePage(this.driver);

});

Then('I should be on the page google.com', function () {

  return this.googlepage.getUrl().then(function (result) {
    expect(result).to.equal('https://www.google.com/');
  });

});

After(function () {
 
  this.driver.end();

});

