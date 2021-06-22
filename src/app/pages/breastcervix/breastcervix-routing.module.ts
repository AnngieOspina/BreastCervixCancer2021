import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreastcervixPage } from './breastcervix.page';

const routes: Routes = [
  {
    path: '',
    component: BreastcervixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreastcervixPageRoutingModule {}
