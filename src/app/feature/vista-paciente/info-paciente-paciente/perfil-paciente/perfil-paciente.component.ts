import { Component } from '@angular/core';
import {UserService} from "../../../../core/services/UserService";

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {

  userInfo = this.userService.userInfo();
  constructor(private userService: UserService) {
  }



}
