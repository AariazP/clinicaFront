import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {Register1Component} from "./registers/register1/register1.component";
import {VistaAdminComponent} from "./admin/vista-admin/vista-admin.component";
import {Register2Component} from "./registers/register2/register2.component";
import {VistaPqrsComponent} from "./pqrs/vista-pqrs/vista-pqrs.component";
import {
  VistaVerConsultasMedicoComponent
} from "./consultas-medico/vista-ver-consultas-medico/vista-ver-consultas-medico.component";
import {VistaMedicoComponent} from "./vista-medico/vista-medico.component";
import {MedicoHacerconsultaComponent} from "./medico-hacerconsulta/medico-hacerconsulta.component";
import {VistaPacienteComponent} from "./vista-paciente/vista-paciente.component";
import {CrearCitaPacienteComponent} from "./crear-cita-paciente/crear-cita-paciente.component";
import {VerCitasPacienteComponent} from "./ver-citas-paciente/ver-citas-paciente.component";
import {EditarInfoComponent} from "./vista-paciente/editar-info/editar-info.component";
import {LoginGuard} from "../core/guards/permiso.service";


const routes: Routes = [
  {
  path: "auth",
  loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },{
    path: "",
    component: IndexComponent
  },{

    path: "register1",
    component: Register1Component,
    canActivate: [LoginGuard]
  },
  {
    path: "admin",
    component: VistaAdminComponent
  },
  {
    path:"register2",
    component: Register2Component
  },
  {
    path: "pqrs",
    component: VistaPqrsComponent
  }, {
    path: "admin-ver-consulta",
    component: VistaVerConsultasMedicoComponent
  },
  {
    path: "vista-medico",
    component: VistaMedicoComponent
  },
  {
    path:"medico-consulta",
    component:MedicoHacerconsultaComponent
  },
  {
    path: "paciente",
    component: VistaPacienteComponent
  },{
    path: "editar-info",
    component: EditarInfoComponent
  }, {
     path: "crear-cita-paciente",
     component: CrearCitaPacienteComponent
  },
  {
    path:"ver-citas",
    component: VerCitasPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
