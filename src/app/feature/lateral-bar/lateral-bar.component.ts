import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent {
  router : Router;
  constructor(router : Router) {
    this.router = router;
  }


  goToVistaPaciente() : void{
    this.router.navigate(["paciente"]);
  }

  goToVistaCitas() : void{
    this.router.navigate(["ver-citas"]);
  }

  goToVistaAgendarCita() {
    this.router.navigate(["crear-cita-paciente"]);
  }
}
