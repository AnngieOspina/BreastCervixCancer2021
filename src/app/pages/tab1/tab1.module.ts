import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { NgCalendarModule  } from 'ionic2-calendar';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    Tab1PageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
