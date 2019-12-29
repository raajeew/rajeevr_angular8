import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MatProgressSpinnerModule,
    MatListModule
  ]
})
export class SkillsModule { }
