import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicaFluoPage } from './tecnica-fluo.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicaFluoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicaFluoPageRoutingModule {}
