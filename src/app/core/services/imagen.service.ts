import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MensajeDTO} from "../dto/auxiliar/MensajeDTO";
import {ImagenDTO} from "../dto/imagen/ImagenDTO";
import {environmentDevelopment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) {
  }

  public subir(imagen: FormData): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(environmentDevelopment.imagenesUrl + "/subir", imagen);
  }

  public eliminar(imagenDTO: ImagenDTO): Observable<MensajeDTO> {
    return this.http.request<MensajeDTO>('delete', environmentDevelopment.imagenesUrl + "/eliminar", {
      body:
      imagenDTO
    });
  }
}
