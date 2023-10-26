import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAndPriceComponent } from './build-and-price.component';

describe('BuildAndPriceComponent', () => {
  let component: BuildAndPriceComponent;
  let fixture: ComponentFixture<BuildAndPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildAndPriceComponent]
    });
    fixture = TestBed.createComponent(BuildAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
