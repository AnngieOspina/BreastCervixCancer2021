import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicasPage } from './tecnicas.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicasPageRoutingModule {}
