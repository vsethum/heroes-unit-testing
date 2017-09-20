import { AngularTourOfHeroesPage } from './app.po';
import { HeroesListPage } from './heroes-list-page';

describe('angular-tour-of-heroes App', () => {
  let angularTourOfHeroesPage: AngularTourOfHeroesPage;
  let heroesListPage: HeroesListPage;

  beforeEach(() => {
    angularTourOfHeroesPage = new AngularTourOfHeroesPage();
    heroesListPage = new HeroesListPage();
  });

  it('should display message saying Tour of Heroes', () => {
    angularTourOfHeroesPage.navigateTo();
    expect(angularTourOfHeroesPage.getParagraphText()).toEqual('Tour of Heroes');
  });

  it('should display message saying My Heroes', () => {
    heroesListPage.navigateTo();
    expect(heroesListPage.getParagraphText()).toEqual('My Heroes');
  });

  it('should contain more than 5 heroes', () => {
    heroesListPage.navigateTo();
    expect(`heroesListPage.getNumberOfHeroes().toBeGreaterThan(5)`);
    }
  );

 });
