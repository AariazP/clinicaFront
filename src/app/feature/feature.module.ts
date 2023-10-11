import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { Register1Component } from './register1/register1.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VistaAdminComponent } from './vista-admin/vista-admin.component';


@NgModule({
  declarations: [
    FeatureComponent,
    Register1Component,
    VistaAdminComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
