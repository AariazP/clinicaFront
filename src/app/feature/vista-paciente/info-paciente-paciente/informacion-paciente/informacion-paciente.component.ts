import {Component} from '@angular/core';
import {UserService} from "../../../../core/services/UserService";
import {ClinicaService} from "../../../../core/services/clinica.service";
import {PacienteDTO} from "../../../../core/dto/paciente/PacienteDTO";
import {PacienteDTOPaciente} from "../../../../core/dto/paciente/PacienteDTOPaciente";

@Component({
  selector: 'app-informacion-paciente',
  templateUrl: './informacion-paciente.component.html',
  styleUrls: ['./informacion-paciente.component.css']
})
export class InformacionPacienteComponent {

  // ---- CAMPOS DEL FORMULARIO -----
  nombre: string;
  fechaNacimiento: string;
  email: string;
  box_ciudad: string;
  listaCiudades: string[] = [];
  telefono: string;
  box_eps: string;

  // --- CAMPOS AUXILIARES  --------
  listaEPS: string[] = [];
  userInfo: PacienteDTOPaciente;


  constructor(private userService: UserService,
              private clinicaService: ClinicaService) {
  }


// COMUNICACION CON LOS ENDPOINTS

  cargarCiudades() {
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.listaCiudades = data.respuesta;
        console.log(data)
      },
      error: error => {
        console.log(error);
      }
    });
  }

  cargarEPS() {
    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.listaEPS = data.respuesta;
        console.log(data)
      },
      error: error => {
        console.log(error);
      }
    });
  }


}
