import {Injectable} from '@angular/core';
import {PacienteDTO} from "../dto/PacienteDTO";

@Injectable({
  providedIn: 'root'
})

/**
 * Clase encargada de almacenar el estado de los datos del registro1
 * para luego ser usados en el registro2
 */
export class TestService {
  pacienteDTO : PacienteDTO  = {
    nombre: 'Juan Esteban Parra Parra',
    cedula: '1002555666',
    fechaNacimiento: '31/08/2001',
    email: 'juane.parrap@uqvirtual.edu.co',
    password: 'blue',
    ciudadResidencia: 'Armenia',
    telefono: '3053990447',
    alergias: ['Polem', 'Arañas'],
    tipoSangre: 'A+',
    eps: 'Sanitas',
    urlFotoPersonal: 'https://shorturl.at/jlvIY'
  }

  getState(): PacienteDTO{
    return this.pacienteDTO;
  }

  setState(pacienteDTO : PacienteDTO) {
    this.pacienteDTO = pacienteDTO;
  }
}
