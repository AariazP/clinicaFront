import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/auxiliar/MensajeDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioactivoService {

  private rol: string = '';
  private id: number = -1;
  private token: string = '';

  constructor() { }

  public setUsuario(rol: string, id: number, token: string): void {
    this.rol = rol;
    this.id = id;
    this.token = token;
  }

  public getId(): number {
    return this.id;
  }

  public getRol(): string {
    return this.rol;
  }

  public getToken(): string {
    return this.token;
  }

}
