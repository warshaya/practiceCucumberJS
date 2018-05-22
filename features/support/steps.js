
const { When, Then, setWorldConstructor, After } = require('cucumber');
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

});

After(function () {
  this.driver.end();
});

