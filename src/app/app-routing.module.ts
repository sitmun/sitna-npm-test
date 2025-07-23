import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbstractMapComponent} from "@sections/common/pages/abstract-map/abstract-map.component";

const routes: Routes = [
  {
    path: '',
    component: AbstractMapComponent,
  },
  {
    path: '**',
    component: AbstractMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
