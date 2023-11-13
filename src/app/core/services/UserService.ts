import {Injectable} from '@angular/core';
import {PacienteDTO} from "../dto/paciente/PacienteDTO";

@Injectable({
  providedIn: 'root'
})

/**
 * Clase encargada de almacenar el estado de los datos del registro1
 * para luego ser usados en el registro2
 */
export class UserService{
  /**
   * Variable que almacen los datos del usuario.
   */
    pacienteDTO : PacienteDTO  = {
    nombre: 'Juan Esteban Parra Parra',
    cedula: '1002555666',
    fechaNacimiento: '31/08/2001',
    email: 'juane.parrap@uqvirtual.edu.co',
    password: 'blue',
    ciudadResidencia: 'Armenia',
    telefono: '3053990447',
    alergias: 'Polem,Arañas',
    tipoSangre: 'A+',
    eps: 'Sanitas',
    urlFotoPersonal: 'https://scontent.fpei3-1.fna.fbcdn.net/v/t39.30808-6/381250945_867716308301050_7577507972825949019_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YXLso-UsGmMAX-BsGks&_nc_ht=scontent.fpei3-1.fna&oh=00_AfDR6_D7dNQBL_JdEmkUIbMErAXd7CDvjpbKDl9j1T8ntA&oe=6554FEF8'
  }


  //Aquí deberían estar todos los DTOS para hacer llamadas a una sola clase que contenga toda la información.

  getPacienteDTO(): PacienteDTO{
    return this.pacienteDTO;
  }

  setPacienteDTO(pacienteDTO : PacienteDTO) {
    this.pacienteDTO = pacienteDTO;
  }
}
