import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailsPageRoutingModule } from './car-details-page-routing.module';
import { CarDetailsPageComponent } from './car-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarDetailsPageComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarDetailsPageRoutingModule,
  ]
})
export class CarDetailsPageModule { }
