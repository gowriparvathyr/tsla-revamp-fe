import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-build-and-price',
  templateUrl: './build-and-price.component.html',
  styleUrls: ['./build-and-price.component.css']
})
export class BuildAndPriceComponent {

  constructor(private location: Location){}
  // istanbul ignore next
  navigateback(){
    this.location.back()
  }
}
