
class googlePage { 

  constructor (driver) {
    this.driver = driver;
    this.driver.url('https://www.google.com');
    this.searchBarSelector = '#lst-ib';
  }

  getUrl () {
    return this.driver.waitForVisible(this.searchBarSelector, 5000).getUrl();
  }

}

export { googlePage };

