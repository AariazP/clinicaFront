import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { Register1Component } from './registers/register1/register1.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VistaAdminComponent } from './admin/vista-admin/vista-admin.component';
import { Register2Component } from './registers/register2/register2.component';
import { FormRegister1Component } from './registers/register1/form-register1/form-register1.component';
import { NavbarComponent } from './general-components/navbar/navbar.component';
import { CrearMedicoComponentComponent } from './admin/crear-medico-component/crear-medico-component.component';
import { MedicoActivoComponentComponent } from './admin/medico-activo-component/medico-activo-component.component';
import { GestionarMedicoComponentComponent } from './admin/gestionar-medico-component/gestionar-medico-component.component';
import { NavbarComponentComponent } from './admin/navbar-component/navbar-component.component';
import { MedicoItemComponent } from './admin/medico-item/medico-item.component';


@NgModule({
  declarations: [
    FeatureComponent,
    Register1Component,
    VistaAdminComponent,
    Register2Component,
    FormRegister1Component,
    NavbarComponent,
    CrearMedicoComponentComponent,
    MedicoActivoComponentComponent,
    GestionarMedicoComponentComponent,
    NavbarComponentComponent,
    MedicoItemComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class FeatureModule { }
