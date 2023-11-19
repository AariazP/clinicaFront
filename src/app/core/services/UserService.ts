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
    }
  }


  logout() {
    this.tokenService.logout();
  }


  getUserInfo() {

    if (this.userInfo == null) {
      this.pacienteService.obtenerPaciente(this.tokenService.getID()).subscribe(
        (response) => {
          this.userInfo = response.respuesta;
          console.log(this.userInfo)
        }, (error) => {
          console.log(error)
        }
        )
    }
    return this.userInfo;
  }
}
