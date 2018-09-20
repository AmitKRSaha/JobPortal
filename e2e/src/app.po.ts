import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageText() {
    return element(by.css('app-root .container-fluid a')).getText();
  }

  getTextBox() {
    return element(by.css('app-root .col-md-6 input'));
  }
}
