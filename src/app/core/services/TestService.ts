import {Injectable} from '@angular/core';
import {PacienteDTO} from "../dto/paciente/PacienteDTO";

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
    alergias: 'polem,arañas',
    tipoSangre: 'A+',
    eps: 'Sanitas',
    urlFotoPersonal: 'https://instagram.fpei1-1.fna.fbcdn.net/v/t51.2885-15/380780590_1809335089498975_7459525827710870897_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fpei1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=oXpy-53xuZsAX8ZGzwk&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE5NjA0Mzk0MzA1MjM3NTkyNw%3D%3D.2-ccb7-5&oh=00_AfAHorQFJs4jhl0K3DgZJynJMXNRBDwk3wvvMnghBuiihg&oe=65542726&_nc_sid=ee9879'
  }

  getPacienteDTO(): PacienteDTO{
    return this.pacienteDTO;
  }

  setPacienteDTO(pacienteDTO : PacienteDTO) {
    this.pacienteDTO = pacienteDTO;
  }
}
