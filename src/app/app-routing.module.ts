import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'product-listing', loadChildren: () => import('./features/product-listing-page/product-listing-page.module').then(m => m.ProductListingPageModule) },
  { path: 'car-details/:id', loadChildren: () => import('./features/car-details-page/car-details-page.module').then(m => m.CarDetailsPageModule) },
  { path: 'build-and-price', loadChildren: () => import('./features/build-and-price/build-and-price.module').then(m => m.BuildAndPriceModule)}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
