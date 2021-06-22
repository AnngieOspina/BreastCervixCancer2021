import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreastcervixPageRoutingModule } from './breastcervix-routing.module';

import { BreastcervixPage } from './breastcervix.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreastcervixPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreastcervixPage]
})
export class BreastcervixPageModule {}
