import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { Register1Component } from './registers/register1/register1.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { Register2Component } from './registers/register2/register2.component';
import { FormRegister1Component } from './registers/register1/form-register1/form-register1.component';
import { NavbarComponent } from './general-components/navbar/navbar.component';


@NgModule({
  declarations: [
    FeatureComponent,
    Register1Component,
    VistaAdminComponent,
    Register2Component,
    FormRegister1Component,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class FeatureModule { }
