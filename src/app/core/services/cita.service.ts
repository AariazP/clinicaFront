import { Injectable } from '@angular/core';
import { InfoConsultaDTO } from '../dto/consulta/InfoConsultaDTO';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../dto/auxiliar/MensajeDTO';
import { environmentDevelopment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitaService { 
 
  private userUrl = environmentDevelopment.consultaUrl;
  

  constructor(private http:HttpClient) { }

  saveCita(consulta: InfoConsultaDTO):  Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar`, consulta);
  }

  listarCitasPaciente(id: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar/${id}`);
  }

  cancelarCita(idConsulta: number) {
    console.log("Cita cancelada"+ " "+ idConsulta);
  }
}
