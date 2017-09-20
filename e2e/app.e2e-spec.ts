import { AngularTourOfHeroesPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
  let angularTourOfHeroesPage: AngularTourOfHeroesPage;
 
  beforeEach(() => {
    angularTourOfHeroesPage = new AngularTourOfHeroesPage();
  });

  it('should display message saying Tour of Heroes', () => {
    angularTourOfHeroesPage.navigateTo();
    expect(angularTourOfHeroesPage.getParagraphText()).toEqual('Tour of Heroes');
  });  

 });
