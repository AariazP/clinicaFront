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
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MedicoItemComponent } from './admin/medico-item/medico-item.component';
import { MedicoActivoItemComponent } from './admin/medico-activo-item/medico-activo-item.component';
import { VistaPqrsComponent } from './pqrs/vista-pqrs/vista-pqrs.component';
import { UltimasPqrsComponent } from './pqrs/ultimas-pqrs/ultimas-pqrs.component';
import { PqrActualComponent } from './pqrs/pqr-actual/pqr-actual.component';
import { CalificacionPqrComponent } from './pqrs/calificacion-pqr/calificacion-pqr.component';
import { PqrItemComponent } from './pqrs/pqr-item/pqr-item.component';
import { DetalleConsultaComponent } from './pqrs/detalle-consulta/detalle-consulta.component';
import { ChatComponent } from './pqrs/chat/chat.component';
import { MensajeEnviadoComponent } from './pqrs/chat/mensaje-enviado/mensaje-enviado.component';
import { MensajeRecibidoComponent } from './pqrs/chat/mensaje-recibido/mensaje-recibido.component';


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
    MedicoItemComponent,
    MedicoActivoItemComponent,
    VistaPqrsComponent,
    UltimasPqrsComponent,
    PqrActualComponent,
    CalificacionPqrComponent,
    PqrItemComponent,
    DetalleConsultaComponent,
    ChatComponent,
    MensajeEnviadoComponent,
    MensajeRecibidoComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class FeatureModule { }
