import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EisPage } from './eis.page';

const routes: Routes = [
  {
    path: '',
    component: EisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EisPageRoutingModule {}
