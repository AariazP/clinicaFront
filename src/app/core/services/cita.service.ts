import { Injectable } from '@angular/core';
import { ConsultaDTOPaciente } from '../dto/consulta/ConsultaDTOPaciente';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
 
  private consulta: ConsultaDTOPaciente;

  constructor() { }

  saveCita(consulta: ConsultaDTOPaciente) {
    this.consulta = consulta;
  }
}
