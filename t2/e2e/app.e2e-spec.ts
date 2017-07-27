import { T2Page } from './app.po';

describe('t2 App', () => {
  let page: T2Page;

  beforeEach(() => {
    page = new T2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Xiaofeng\'s Angular2 t2!');
  });
});
