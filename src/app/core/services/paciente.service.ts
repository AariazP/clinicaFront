import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environmentDevelopment} from "../../../environments/environment.development";
import {PacienteDTO} from "../dto/paciente/PacienteDTO";
import {MensajeDTO} from "../dto/auxiliar/MensajeDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private userUrl = environmentDevelopment.pacienteUrl;

  constructor(private http: HttpClient) {
  }


  public verDetallePaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${codigo}`);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  public editarPerfil(pacienteDTO: DetallePacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`, pacienteDTO);
  }

  public crearPQRS(registroPQRSDTO: RegistroPQRSDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO);
  }

  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }
}
