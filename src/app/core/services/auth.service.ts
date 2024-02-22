import {Injectable} from '@angular/core';
import {AuthLoginDTO} from "../dto/authLoginDTO";
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environmentDevelopment} from "../../../environments/environment.development";
import {AuthLoginResponseDto} from "../dto/authLoginResponseDto";
import {PacienteDTO} from "../dto/paciente/PacienteDTO";
import {MensajeDTO} from "../dto/auxiliar/MensajeDTO";
import {TokenDTO} from "../dto/auxiliar/TokenDTO";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl:string = environmentDevelopment.apiUrl; //http://localhost:8080/api
    private authURL : string  = `${this.apiUrl}/auth`;
    private http:HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public login(login: AuthLoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(environmentDevelopment.AutenticacionUrl + "/login", login);
  }

  public registrarPaciente(paciente: PacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrarse`, paciente);
  }


}
