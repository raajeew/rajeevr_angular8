import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
