import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { ProductListingPageComponent } from './features/product-listing-page/product-listing-page.component';
import { CarDetailsPageComponent } from './features/car-details-page/car-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'product-listing', component: ProductListingPageComponent },
  { path: 'car-details/:id', component: CarDetailsPageComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
