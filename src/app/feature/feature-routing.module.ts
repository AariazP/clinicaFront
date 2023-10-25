import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {Register1Component} from "./registers/register1/register1.component";
import {VistaAdminComponent} from "./vista-admin/vista-admin.component";
import {Register2Component} from "./registers/register2/register2.component";

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
