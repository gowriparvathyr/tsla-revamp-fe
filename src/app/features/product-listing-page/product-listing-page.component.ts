import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeslaDataService } from 'src/app/services/tesla-data.service';

@Component({
  selector: 'app-product-listing-page',
  templateUrl: './product-listing-page.component.html',
  styleUrls: ['./product-listing-page.component.css']
})
export class ProductListingPageComponent {
  cars: any[] = [];
  filteredCars: any[] = [];
  searchQuery = '';
  currentPage = 1;
  pageSize = 10;

  constructor(private teslaDataService: TeslaDataService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.teslaDataService.getCars().subscribe((data: any) => {
      this.cars = data;
      this.filteredCars = this.cars;
    });
  }

  applyFilter(): void {
    this.filteredCars = this.cars.filter(car => {
      return car.model.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
    this.currentPage = 1;
  }
  // istanbul ignore next
  goToDetails(data: any){
    this.router.navigate([`/car-details/${data.id}`])
  }
  navigateback(){
    this.location.back()
  }
}