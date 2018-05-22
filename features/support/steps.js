
const { When, Then, setWorldConstructor, After } = require('cucumber');
const webdriverio = require('webdriverio');

const { googlePage } = require('./pages/google.page');

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

function CustomWorld () {
  this.driver = webdriverio.remote(options).init();
}

setWorldConstructor(CustomWorld);

When('I navigate to google.com', function () {
  const google = googlePage(this.driver);
});

Then('I should be on the page google.com', function () {

});

After(function () {
  this.driver.end();
});

