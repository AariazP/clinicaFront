import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/pages/login/login.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
  path: "auth",
  loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },{
    path: "",
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
