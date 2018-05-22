
const { When, Then, setWorldConstructor } = require('cucumber');
const webdriverio = require('webdriverio');

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

});

Then('I should be on the page google.com', function () {
  this.driver.end();
});

