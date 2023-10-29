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
import { CalificacionItemComponent } from './pqrs/calificacion-item/calificacion-item.component';
import { VistaVerConsultasMedicoComponent } from './consultas-medico/vista-ver-consultas-medico/vista-ver-consultas-medico.component';
import {MedicoComponentComponent} from "./consultas-medico/medico-component/medico-component.component";
import { ConsultasComponent } from './consultas-medico/consultas/consultas.component';
import { ConsultaItemComponent } from './consultas-medico/consulta-item/consulta-item.component';
import { VistaMedicoComponent } from './vista-medico/vista-medico.component';
import { CitasAsignadasComponent } from './vista-medico/citas-asignadas/citas-asignadas.component';
import { DiaLibreComponent } from './vista-medico/dia-libre/dia-libre.component';
import { HistorialConsultasComponent } from './vista-medico/historial-consultas/historial-consultas.component';
import { CitaItemComponent } from './vista-medico/cita-item/cita-item.component';
import { UltimasConsultasItemComponent } from './vista-medico/ultimas-consultas-item/ultimas-consultas-item.component';
import { DetalleConsultaMedicoComponent } from './vista-medico/detalle-consulta-medico/detalle-consulta-medico.component';
import { MedicoHacerconsultaComponent } from './medico-hacerconsulta/medico-hacerconsulta.component';
import { InfoPacienteComponent } from './medico-hacerconsulta/info-paciente/info-paciente.component';
import { ResumenConsultaComponent } from './medico-hacerconsulta/resumen-consulta/resumen-consulta.component';
import { HistoriaClinicaComponent } from './medico-hacerconsulta/historia-clinica/historia-clinica.component';
import { VistaPacienteComponent } from './vista-paciente/vista-paciente.component';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import { InfoPacientePacienteComponent } from './vista-paciente/info-paciente-paciente/info-paciente-paciente.component';
import { PqrsPacienteComponent } from './vista-paciente/pqrs-paciente/pqrs-paciente.component';
import { PerfilPacienteComponent } from './vista-paciente/pqrs-paciente/perfil-paciente/perfil-paciente.component';
import { InformacionPacienteComponent } from './vista-paciente/pqrs-paciente/informacion-paciente/informacion-paciente.component';
import { CalendarioCitasComponent } from './vista-paciente/pqrs-paciente/calendario-citas/calendario-citas.component';


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
    MensajeRecibidoComponent,
    CalificacionItemComponent,
    VistaVerConsultasMedicoComponent,
    MedicoComponentComponent,
    ConsultasComponent,
    ConsultaItemComponent,
    VistaMedicoComponent,
    CitasAsignadasComponent,
    DiaLibreComponent,
    HistorialConsultasComponent,
    CitaItemComponent,
    UltimasConsultasItemComponent,
    DetalleConsultaMedicoComponent,
    MedicoHacerconsultaComponent,
    InfoPacienteComponent,
    ResumenConsultaComponent,
    HistoriaClinicaComponent,
    VistaPacienteComponent,
    LateralBarComponent,
    InfoPacientePacienteComponent,
    PqrsPacienteComponent,
    PerfilPacienteComponent,
    InformacionPacienteComponent,
    CalendarioCitasComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class FeatureModule { }
