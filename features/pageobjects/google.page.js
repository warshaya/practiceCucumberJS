
import { browser, $ } from '@wdio/globals'

export default class GooglePage {

  constructor () {
    this.searchBarSelector = 'textarea[title=Search]';
  }

  async open () {
    await browser.url('https://www.google.com');
  }

  async showUrl () {
    await $(this.searchBarSelector).waitForDisplayed();
    return await browser.getUrl();
  }

}

