import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicaTermoPageRoutingModule } from './tecnica-termo-routing.module';

import { TecnicaTermoPage } from './tecnica-termo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicaTermoPageRoutingModule
  ],
  declarations: [TecnicaTermoPage]
})
export class TecnicaTermoPageModule {}
