import { Injectable } from '@angular/core';
import { ConsultaDTOMedico } from '../dto/consulta/ConsultaDTOMedico';

@Injectable({
  providedIn: 'root'
})
export class AtencionCitaService {
  
  cita: ConsultaDTOMedico;

  constructor() { }

  setConsulta(cita: ConsultaDTOMedico) {
    this.cita = cita;
  }
}
