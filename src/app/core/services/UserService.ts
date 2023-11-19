import {Injectable, OnInit} from '@angular/core';
import {PacienteDTO} from "../dto/paciente/PacienteDTO";
import {TokenService} from "./token.service";
import {PacienteService} from "./paciente.service";
import {PacienteDTOPaciente} from "../dto/paciente/PacienteDTOPaciente";

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit {

  isLogged: boolean = false;
  email: string = '';
  userInfo: PacienteDTOPaciente;


  constructor(private tokenService: TokenService,
              private pacienteService: PacienteService) {
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      this.email = this.tokenService.getEmail();
      this.cargarDatosPaciente();
    }
  }


  logout() {
    this.tokenService.logout();
  }

  cargarDatosPaciente() {
    this.pacienteService.obtenerPaciente(this.tokenService.getID()).subscribe(
      data => {
        data.respuesta
      }, error => {
        console.log(error)
      }
    );
  }

}
