import { Component } from '@angular/core';
import {UserService} from "../../../../core/services/UserService";

@Component({
  selector: 'app-informacion-paciente',
  templateUrl: './informacion-paciente.component.html',
  styleUrls: ['./informacion-paciente.component.css']
})
export class InformacionPacienteComponent {

  userDTO = this.userService.getPacienteDTO();

  constructor(private userService: UserService) {
  }

}
