import {browser, by, element} from 'protractor';

export class HeroesListPage {
  
  navigateTo() {
    return browser.get('heroes');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  getNumberOfHeroes(): any {
    return element.all(by.css('#left md-list-item')).count();
  }
}