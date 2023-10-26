import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingPageComponent } from './product-listing-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { TeslaDataService } from 'src/app/services/tesla-data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('ProductListingPageComponent', () => {
  let component: ProductListingPageComponent;
  let fixture: ComponentFixture<ProductListingPageComponent>;
  let teslaDataService: jasmine.SpyObj<TeslaDataService>;
  let router: jasmine.SpyObj<Router>;
  let location: jasmine.SpyObj<Location>;

  beforeEach(() => {
    const teslaDataServiceSpy = jasmine.createSpyObj('TeslaDataService', ['getCars']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [ProductListingPageComponent],
      providers: [
        { provide: TeslaDataService, useValue: teslaDataServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: Location, useValue: locationSpy },
      ],
      imports: [FormsModule, NgxPaginationModule, CommonModule],
      schemas: [ NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(ProductListingPageComponent);
    component = fixture.componentInstance;
    teslaDataService = TestBed.inject(TeslaDataService) as jasmine.SpyObj<TeslaDataService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    location = TestBed.inject(Location) as jasmine.SpyObj<Location>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cars data on initialization', () => {
    const carsData = [{ model: 'Model S', description: 'Description', image: 'image-url' }];
    teslaDataService.getCars.and.returnValue(of(carsData));
    component.ngOnInit();
    expect(component.cars).toEqual(carsData);
    expect(component.filteredCars).toEqual(carsData);
  });

  it('should apply filter to cars', () => {
    component.cars = [
      { model: 'Model S', description: 'Description', image: 'image-url' },
      { model: 'Model 3', description: 'Description', image: 'image-url' },
    ];
    component.searchQuery = 'S';
    component.applyFilter();
    expect(component.filteredCars.length).toBe(1);
    expect(component.filteredCars[0].model).toBe('Model S');
  });

  it('should navigate back', () => {
    component.navigateback();
    expect(component.navigateback).toBeDefined();
  });
});