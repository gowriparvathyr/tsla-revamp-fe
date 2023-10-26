import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingPageRoutingModule } from './product-listing-page-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductListingPageComponent } from './product-listing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductListingPageComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ProductListingPageRoutingModule,
    NgxPaginationModule
  ]
})
export class ProductListingPageModule { }
