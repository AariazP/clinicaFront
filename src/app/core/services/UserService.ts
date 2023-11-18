import {Injectable, OnInit} from '@angular/core';
import {PacienteDTO} from "../dto/paciente/PacienteDTO";
import {TokenService} from "./token.service";
import {PacienteService} from "./paciente.service";

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit {

  isLogged: boolean = false;
  email: string = '';
  pacienteDTO: PacienteDTO;

  constructor(private tokenService: TokenService, private pacienteService: PacienteService) {
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


  getPacienteDTO()
    :
    PacienteDTO {
    return this.pacienteDTO;
  }

  setPacienteDTO(pacienteDTO
                   :
                   PacienteDTO
  ) {
    this.pacienteDTO = pacienteDTO;
  }

  cargarDatosPaciente() {
    this.pacienteDTO = this.pacienteService.obtenerPaciente(this.tokenService.getID()).subscribe(
      data => {
        this.pacienteDTO = data
      }
    );
  }
}
