import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildAndPriceComponent } from './build-and-price.component';

const routes: Routes = [
  {path: '', component: BuildAndPriceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildAndPriceRoutingModule { }
