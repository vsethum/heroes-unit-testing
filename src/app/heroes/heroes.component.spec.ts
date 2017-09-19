import { HeroService } from './shared/hero.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [HeroService],
      imports: [HttpModule, RouterTestingModule]
    });
    TestBed.compileComponents();
  }));

  // adding to be truthy test
  it('should create the hero app', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 
});
