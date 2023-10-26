import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDetailsPageComponent } from './car-details-page.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { TeslaDataService } from 'src/app/services/tesla-data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

class MockActivatedRoute {
  paramMap = of({
    get: (key: string) => '1',
    has: (key: string) => true,
    getAll: (key: string) => ['1'],
    keys: ['1'],
  }) as unknown as ParamMap;
}

describe('CarDetailsPageComponent', () => {
  let component: CarDetailsPageComponent;
  let fixture: ComponentFixture<CarDetailsPageComponent>;
  let teslaDataService: jasmine.SpyObj<TeslaDataService>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let location: jasmine.SpyObj<Location>;
  const paramMap: ParamMap = {
    get: (key: string) => '1',
    has: function (name: string): boolean {
      throw new Error('Function not implemented.');
    },
    getAll: function (name: string): string[] {
      throw new Error('Function not implemented.');
    },
    keys: []
  };

  beforeEach(() => {
    const teslaDataServiceSpy = jasmine.createSpyObj('TeslaDataService', ['getCars']);
    // const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], { paramMap: of(paramMap });
    const locationSpy = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [CarDetailsPageComponent],
      providers: [
        { provide: TeslaDataService, useValue: teslaDataServiceSpy },
        { provide: ActivatedRoute, useValue: MockActivatedRoute },
        { provide: Location, useValue: locationSpy },
      ],
      schemas: [ NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(CarDetailsPageComponent);
    component = fixture.componentInstance;
    teslaDataService = TestBed.inject(TeslaDataService) as jasmine.SpyObj<TeslaDataService>;
    activatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    location = TestBed.inject(Location) as jasmine.SpyObj<Location>;

    // Set up a mock car object for testing
    component.car = {
      id: '1',
      model: 'Test Model',
      description: 'Test Description',
      price: 'Test Price',
      variants: ['Variant 1', 'Variant 2'],
      selectedVariant: 'Variant 1',
      color: 'white',
      image: 'assets/images/white.jpg',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back', () => {
    component.navigateback();
    expect(location.back).toHaveBeenCalled();
  });

  it('should select a variant', () => {
    const variant = 'Variant 2';
    component.selectVariant(variant);
    expect(component.car.selectedVariant).toBe(variant);
  });

  it('should update car images when changing color to black', () => {
    component.car.color = 'black';
    component.updateCarImages();
    expect(component.car.image).toBe('assets/images/black.jpg');
  });

  it('should update car images when changing color to red', () => {
    component.car.color = 'red';
    component.updateCarImages();
    expect(component.car.image).toBe('assets/images/red.jpg');
  });

  it('should update car images when changing color to white', () => {
    component.car.color = 'white';
    component.updateCarImages();
    expect(component.car.image).toBe('assets/images/white.webp');
  });

});
