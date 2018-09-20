import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Job Consultant Portal message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Job Consultant Portal');
  });

  it('should display Company Name', () => {
    page.navigateTo();
    expect(page.getPageText()).toEqual('Company Name');
  });

  it('should display Search Text Box', () => {
    page.navigateTo();
    expect(page.getTextBox()).toBeTruthy();
  });
});
