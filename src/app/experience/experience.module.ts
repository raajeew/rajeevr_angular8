import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';


@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ExperienceModule { }
