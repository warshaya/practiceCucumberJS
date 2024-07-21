import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import GooglePage from '../pageobjects/google.page.js';


When('I navigate to google.com', async function () {
    const googlePage = new GooglePage();
    this.googlePage = googlePage;
    await googlePage.open();
});

Then('I should be on the page google.com', {timeout: 10 * 1000}, async function () {

  const urlFound = await this.googlePage.showUrl()
  await expect(urlFound).toEqual('https://www.google.com/')

});

