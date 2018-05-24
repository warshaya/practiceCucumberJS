
class googlePage { 

  constructor (driver) {
    this.driver = driver;
    this.driver.url('https://www.google.com');
  }

  getUrl () {
    return this.driver.getUrl();
  }

}

export { googlePage };

