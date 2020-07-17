import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualPageRoutingModule } from './visual-routing.module';

import { VisualPage } from './visual.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VisualPage]
})
export class VisualPageModule {}
