import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Buffer} from "buffer";


const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

// The following is an example of a token payload:
// {
//   "id": 2,
//   "nombre": "Juan Esteban Parra Parra",
//   "rol": "paciente",
//   "sub": "estebanparra946@gmail.com",
//   "iat": 1700327416,
//   "exp": 1700327716
// }

  constructor(private router: Router) {
  }


  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public logout() {
    window.sessionStorage.clear();
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }

  public decodePayload(token: string): any {
    const payload = token!.split(".")[1]; //Aqui está el nombre, el rol.
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    console.log(values)
    return values;
  }

  public getRole(): string[] {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.rol;
    }
    return [];
  }

  public getEmail(): string {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.sub;
    }
    return "";
  }

  public login(token: string) {
    this.setToken(token);
    this.router.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }


}
