import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadosPageRoutingModule } from './cuidados-routing.module';

import { CuidadosPage } from './cuidados.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadosPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [CuidadosPage]
})
export class CuidadosPageModule {}
