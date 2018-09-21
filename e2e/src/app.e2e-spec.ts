import { AppPage } from './app.po';
import { element, by, browser } from '../../node_modules/protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Job Consultant Portal message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Job Consultant Portal');
  });

  it('should display Company Name and Search Text Box', () => {
    page.navigateTo();
    expect(page.getPageText()).toEqual('Company Name');
    expect(page.getTextBox()).toBeTruthy();
  });

  it('should show login page and click should work', () => {
    expect(element(by.css('app-login #form-group .userName'))).toBeTruthy();
    expect(element(by.css('app-login #form-group .exampleInputPassword1'))).toBeTruthy();
    expect(element(by.css('app-login button'))).toBeTruthy();
  });

  it('should click login page and detail', () => {
    page.shouldClickLoginButton();
    browser.sleep(2000);
    expect(element(by.css('app-job-shell #form-check-input'))).toBeTruthy();

  });
});
