import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/pages/login/login.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [{

  path: "",
  component: IndexComponent

}, {
  path: "auth",
  loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
