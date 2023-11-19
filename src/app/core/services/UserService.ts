import {Injectable, OnInit} from '@angular/core';
import {PacienteDTO} from "../dto/paciente/PacienteDTO";
import {TokenService} from "./token.service";
import {PacienteService} from "./paciente.service";
import {PacienteDTOPaciente} from "../dto/paciente/PacienteDTOPaciente";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit {

  isLogged: boolean = false;
  email: string = '';
  userInfo: PacienteDTOPaciente;
  private userInfoSubject = new BehaviorSubject<PacienteDTOPaciente>(null);
  userInfo$: Observable<PacienteDTOPaciente> = this.userInfoSubject.asObservable();


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

  /**
   * Gets the user info from the backend and stores it in the userInfo field.
   * @private
   */
  private auxGetUserInfo(): void {
    if (!this.userInfo) {
      this.pacienteService.obtenerPaciente(this.tokenService.getID()).subscribe(
        (response) => {
          this.userInfo = response.respuesta;
          console.log("USER INFO SUCCESSFULLY OBTAINED----------------->");
          console.log(this.userInfo);
          this.userInfoSubject.next(this.userInfo);
        },
        (error) => {
          console.log("ERROR OBTAINING USER INFO----------------->");
          console.log(error);
        }
      );
    } else {
      this.userInfoSubject.next(this.userInfo);
    }
  }

  public getUserInfo(): Observable<PacienteDTOPaciente> {
    this.auxGetUserInfo();
    return this.userInfo$;
  }
}
