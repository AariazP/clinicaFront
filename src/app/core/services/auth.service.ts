import { Injectable } from '@angular/core';
import {AuthLoginDTO} from "../dto/authLoginDTO";
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environmentDevelopment} from "../../../environments/environment.development";
import {AuthLoginResponseDto} from "../dto/authLoginResponseDto";
import {PacienteDTO} from "../dto/paciente/PacienteDTO";
import {TestService} from "./TestService";
import {MensajeDTO} from "../dto/auxiliar/MensajeDTO";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = environmentDevelopment.apiUrl;
  private authURL  = `${this.apiUrl}/auth`;
  private http:HttpClient;

  constructor(http:HttpClient, private testService: TestService) {
    this.http = http;
  }

  public login(login:AuthLoginDTO): Observable<AuthLoginResponseDto>{
    return this.http.post<AuthLoginResponseDto>(`${this.apiUrl}/login`, login);
  }

  public registrarPaciente(paciente:PacienteDTO):Observable<MensajeDTO<String>>{
    return this.http.post<MensajeDTO<String>>(`${this.authURL}/registrarse`, paciente);
  }



}
