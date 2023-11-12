import { Component } from '@angular/core';
import {UserService} from "../../../../core/services/UserService";

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {

  userDTO = this.userService.pacienteDTO;
  constructor(private  userService: UserService) {
  }



}
