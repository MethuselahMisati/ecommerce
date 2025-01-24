import { EcommerceAppPage } from './app.po';

describe('ecommerce-app App', () => {
  let page: EcommerceAppPage;

  beforeEach(() => {
    page = new EcommerceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}
