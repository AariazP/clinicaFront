import { Injectable } from '@angular/core';
import {AuthLoginDTO} from "../dto/authLoginDTO";
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environmentDevelopment} from "../../../environments/environment.development";
import {AuthLoginResponseDto} from "../dto/authLoginResponseDto";
import {PacienteDTO} from "../dto/PacienteDTO";
import {TestService} from "./TestService";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser = this.testService.getPacienteDTO();

  private apiUrl:string = environmentDevelopment.apiUrl;
  private http:HttpClient;

  constructor(http:HttpClient, private testService: TestService) {
    this.http = http;
  }

  public login(login:AuthLoginDTO): Observable<AuthLoginResponseDto>{
    return this.http.post<AuthLoginResponseDto>(`${this.apiUrl}/login`, login);
  }



}
