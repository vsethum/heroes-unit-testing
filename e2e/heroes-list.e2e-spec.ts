import { HeroesListPage } from './heroes-list-page';

describe('angular-tour-of-heroes App', () => {
  let heroesListPage: HeroesListPage;

  beforeEach(() => {
    heroesListPage = new HeroesListPage();
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
