import {async, TestBed} from '@angular/core/testing';
import {HeroService} from './hero.service';
import {APP_BASE_HREF} from '@angular/common';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions, HttpModule, XHRBackend } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { inject, getTestBed } from '@angular/core/testing';
import { Observable  } from 'rxjs/Observable';


describe('HeroService', () => {
  let heroService;
  let newHeroCreated;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
            MockBackend,
            BaseRequestOptions,
            { provide: XHRBackend, useClass: MockBackend },
            {
              provide: Http,
              useFactory: (backend, options) => new Http(backend, options),
              deps: [MockBackend, BaseRequestOptions]
            },
        
        HeroService
      ]
    });

    heroService = TestBed.get(HeroService);
  });

   it('should contains heroes', async(inject(
    [HeroService, MockBackend], (service, mockBackend) => {
        const fakeHeroes = [ {id:'12', name:"Narco"}, 
                             {id:'13', name:"Bombasto"},
                             {id:'14', name:"Celeritas"},
                             {id:'15', name:"Magneta"},
                           ];
        const options = new ResponseOptions({status: 200, body: {data: fakeHeroes}});
        const response = new Response(options);
        mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    heroService.getHeroes().then((data: any) => {
      expect(data.length).toBeGreaterThan(3);
    });
  })));

  it('should get hero by id 12', async(inject(
    [HeroService, MockBackend], (service, mockBackend) => {
        const fakeHero =  {id:'12', name:"Narco"};
        const options = new ResponseOptions({status: 200, body: {data: fakeHero}});
        const response = new Response(options);
        mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
        heroService.getHero('12').then(((hero) => {        
        expect(hero.id).toEqual('12');
        }));
  })));

  it('should fail getting hero by no id', async(inject(
    [HeroService, MockBackend], (service, mockBackend) => {
        const fakeHero =  {id:'', name:"Narco"};
        const options = new ResponseOptions({status: 200, body: {data: fakeHero}});
        const response = new Response(options);
        mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    heroService.getHero('noId').then(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  })));

  it('should fail creating empty hero', async(inject(
    [HeroService, MockBackend], (service, mockBackend) => {
        const fakeHero =  {};
        const options = new ResponseOptions({status: 200, body: {data: fakeHero}});
        const response = new Response(options);
        mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    heroService.create({}).then(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  })));

  it('should fail deleting noId hero', async(inject(
    [HeroService, MockBackend], (service, mockBackend) => {
        const fakeHero =  {id:'', name:"Narco"};
        const options = new ResponseOptions({status: 200, body: {data: fakeHero}});
        const response = new Response(options);
        mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    heroService.delete('noId').then(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  })));

  /*it('should fail like empty hero', async(() => {
    localStorage.setItem('votes', String(0));
    heroService.like('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should return json response error', async(() => {
    expect(heroService.handleError(new Response('noId'))).toEqual(jasmine.any(ErrorObservable));
  }));

  it('should create hero', async(() => {
    heroService.createHero({
      'name': 'test',
      'alterEgo': 'test'
    }).subscribe((hero) => {
      newHeroCreated = hero;
      expect(hero.id).not.toBeNull();
    });
  }));

  /* it('should not like a hero because no votes', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit));
    expect(heroService.checkIfUserCanVote()).toBe(false);
    heroService.like(newHeroCreated).subscribe(() => {
    }, (error) => {
      expect(error).toBe('maximum votes');
    });
  }));*/

  /*it('should like a hero', async(() => {
    localStorage.setItem('votes', String(0));
    expect(heroService.checkIfUserCanVote()).toBe(true);
    heroService.like(newHeroCreated).subscribe((response) => {
      expect(response).toEqual({});
    });
  }));

  it('should delete a hero', async(() => {
    heroService.deleteHeroById(newHeroCreated.id).subscribe((response) => {
      expect(response).toEqual({});
    });
  })); */


});