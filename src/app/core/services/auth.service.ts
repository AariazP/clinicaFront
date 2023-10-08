import { Injectable } from '@angular/core';
import {AuthLoginDTO} from "../dto/authLoginDTO";
import {Observable, Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {environmentDevelopment} from "../../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = environmentDevelopment.apiUrl;
  private http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
  }

  public login(login:AuthLoginDTO): Subscription{
    return this.http.post(`${this.apiUrl}/login`, login).subscribe({
      next: data => {
          console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
