import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreastmamaPage } from './breastmama.page';

const routes: Routes = [
  {
    path: '',
    component: BreastmamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreastmamaPageRoutingModule {}
