import { Injectable } from '@angular/core';
import { InfoConsultaDTO } from '../dto/consulta/InfoConsultaDTO';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
 
  private consulta: InfoConsultaDTO;

  constructor() { }

  saveCita(consulta: InfoConsultaDTO) {
    this.consulta = consulta;
    console.log("Cita guardada: ", JSON.stringify(this.consulta));
  }
}
