import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicaTermoPage } from './tecnica-termo.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicaTermoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicaTermoPageRoutingModule {}
