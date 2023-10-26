import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TeslaDataService } from './tesla-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('TeslaDataService', () => {
  let service: TeslaDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeslaDataService],
    });
    service = TestBed.inject(TeslaDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of cars', () => {
    const mockData = [
      { id: 1, name: 'Model S' },
      { id: 2, name: 'Model 3' },
    ];

    service.getCars().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(
      '/assets/datas/product-listing.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });


it('scrollObj$ should emit values', fakeAsync(() => {
  const mockValue = 'scrolling';
  let emittedValue: string | undefined;

  const subscription = service.scrollObj$.subscribe((value) => {
    emittedValue = value;
  });
  service.scrollObj.next(mockValue);
  expect(emittedValue).toBe(mockValue);
  subscription.unsubscribe();
  service.scrollObj.next('another-value');
  tick();
  expect(emittedValue).toBe(mockValue);
}));

  

  it('scrollObj$ should not emit values after unsubscribed', () => {
    const mockValue = 'scrolling';
    let emittedValue: string | undefined;
    const subscription = service.scrollObj$.subscribe(value => {
      emittedValue = value;
    });
    service.scrollObj.next(mockValue);
    expect(emittedValue).toBe(mockValue);
    subscription.unsubscribe();
    service.scrollObj.next('another-value');
    expect(emittedValue).toBe(mockValue);
  });
});