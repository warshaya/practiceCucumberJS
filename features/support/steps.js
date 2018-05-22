
const { When, Then } = require('cucumber');
const webdriverio = require('webdriverio');

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

When('I navigate to google.com', function (done) {
  const driver = webdriverio.remote(options).init().call(done);
  driver.end();
});

Then('I should be on the page google.com', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

