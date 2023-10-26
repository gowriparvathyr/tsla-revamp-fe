import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsPageComponent } from './car-details-page.component';

const routes: Routes = [
  {path: '', component: CarDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarDetailsPageRoutingModule { }
