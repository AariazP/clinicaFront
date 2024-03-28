import { Injectable } from '@angular/core';
import { Cons } from 'rxjs';
import { ConsultaDTOMedico } from '../dto/consulta/ConsultaDTOMedico';

@Injectable({
  providedIn: 'root'
})
export class PagoServiceService {

  cita:ConsultaDTOMedico;
  constructor() { }

  setCita(cita:ConsultaDTOMedico) {
    this.cita = cita;
  }

  getCita() {
    return this.cita;
  }
}
