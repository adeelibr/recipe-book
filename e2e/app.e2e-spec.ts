import { RecibeBookPage } from './app.po';

describe('recibe-book App', function() {
  let page: RecibeBookPage;

  beforeEach(() => {
    page = new RecibeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
