import { TcDbPage } from './app.po';

describe('tc-db App', () => {
  let page: TcDbPage;

  beforeEach(() => {
    page = new TcDbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
