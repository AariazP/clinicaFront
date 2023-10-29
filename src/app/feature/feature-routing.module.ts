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


const routes: Routes = [
  {
  path: "auth",
  loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },{
    path: "",
    component: IndexComponent
  },{

    path: "register1",
    component: Register1Component
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
