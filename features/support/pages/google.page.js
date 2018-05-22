

function googlePage (driver) {
  this.driver = driver;
  this.driver.url('https://www.google.com');
  this.driver.pause(10000).call();
};

module.exports = { googlePage };

