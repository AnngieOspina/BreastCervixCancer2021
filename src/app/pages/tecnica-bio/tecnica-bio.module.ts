import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicaBioPageRoutingModule } from './tecnica-bio-routing.module';

import { TecnicaBioPage } from './tecnica-bio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicaBioPageRoutingModule
  ],
  declarations: [TecnicaBioPage]
})
export class TecnicaBioPageModule {}
