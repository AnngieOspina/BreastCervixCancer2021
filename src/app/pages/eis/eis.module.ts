import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EisPageRoutingModule } from './eis-routing.module';

import { EisPage } from './eis.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EisPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EisPage]
})
export class EisPageModule {}
