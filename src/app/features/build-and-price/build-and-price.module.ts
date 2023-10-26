import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildAndPriceRoutingModule } from './build-and-price-routing.module';
import { BuildAndPriceComponent } from './build-and-price.component';


@NgModule({
  declarations: [BuildAndPriceComponent],
  imports: [
    CommonModule,
    BuildAndPriceRoutingModule
  ]
})
export class BuildAndPriceModule { }
