import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MensajeDTO} from "../dto/auxiliar/MensajeDTO";
import {environmentDevelopment} from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class ClinicaService {
    private backendUrl: string = environmentDevelopment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public listarCiudades(): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.backendUrl}/lista-ciudades`);
    }

    public listarTipoSangre(): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.backendUrl}/tiposSangre`);
    }
    public listarEPS(): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.backendUrl}/epss`);
    }

  //TODO
  /*  public listarEspecialidades(): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.backendUrl}/lista-especialidades`);
    }*/
}
