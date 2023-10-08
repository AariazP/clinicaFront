import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { Register1Component } from './register1/register1.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FeatureComponent,
    Register1Component
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
