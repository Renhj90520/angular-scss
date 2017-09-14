import { AngularScssPage } from './app.po';

describe('angular-scss App', () => {
  let page: AngularScssPage;

  beforeEach(() => {
    page = new AngularScssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
