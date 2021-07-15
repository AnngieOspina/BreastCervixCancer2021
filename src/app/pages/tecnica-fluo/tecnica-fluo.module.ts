import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicaFluoPageRoutingModule } from './tecnica-fluo-routing.module';

import { TecnicaFluoPage } from './tecnica-fluo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicaFluoPageRoutingModule
  ],
  declarations: [TecnicaFluoPage]
})
export class TecnicaFluoPageModule {}
