import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreastmamaPageRoutingModule } from './breastmama-routing.module';

import { BreastmamaPage } from './breastmama.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreastmamaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreastmamaPage]
})
export class BreastmamaPageModule {}
