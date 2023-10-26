import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingPageComponent } from './product-listing-page.component';

const routes: Routes = [
  {path: '', component: ProductListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListingPageRoutingModule { }
