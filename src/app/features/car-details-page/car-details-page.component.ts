import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, take } from 'rxjs';
import { TeslaDataService } from 'src/app/services/tesla-data.service';
import { ICarDetails } from 'src/app/utils/car-details.interface';

@Component({
  selector: 'app-car-details-page',
  templateUrl: './car-details-page.component.html',
  styleUrls: ['./car-details-page.component.css']
})
export class CarDetailsPageComponent {
  car!: ICarDetails

  constructor(private teslaDataService: TeslaDataService, private location: Location, private activatedRoute: ActivatedRoute){}
  // istanbul ignore next
  ngOnInit(){
    let payload = [];
    payload.push(this.teslaDataService.getCars());
    payload.push(this.activatedRoute.paramMap);
    combineLatest([...payload]).pipe(take(1))
    .subscribe(([cars, paramMap]) => {
      const id = paramMap.get('id');
      const filteredCar = cars.find((car: { id: any; }) => car.id == id);
      if (filteredCar) {
        console.log(filteredCar);
        this.car = filteredCar;
      } else {
        console.error('Car with the specified ID not found');
      }
    });
  }
  selectVariant(variant: string) {
    this.car.selectedVariant = variant;
  }
  updateCarImages(){
    this.car.image = this.car.color == 'black' ? 'assets/images/black.jpg' :  this.car.color == 'red' ? 'assets/images/red.jpg' : 'assets/images/white.webp'
  }
  navigateback(){
    this.location.back()
  }
}
