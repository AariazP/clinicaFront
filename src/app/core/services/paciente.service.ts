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

  /**
   *
   * @param codigo codigo del paciente
   * @returns Observable<MensajeDTO<PacienteDTOPaciente>>
   */
  public obtenerPaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(environmentDevelopment.pacienteUrl + "/verPerfil/" + codigo);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  public editarPerfil(pacienteDTO: PacienteDTO, idPaciente : number): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(environmentDevelopment.pacienteUrl + "/editarPerfil/" + idPaciente, pacienteDTO);
  }

  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }
}
