import { ECareerPage } from './app.po';

describe('e-career App', () => {
  let page: ECareerPage;

  beforeEach(() => {
    page = new ECareerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
