import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicaBioPage } from './tecnica-bio.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicaBioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicaBioPageRoutingModule {}
