import { Injectable } from '@angular/core';
import { MedicoDTO } from '../dto/medico/MedicoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  
  medico: MedicoDTO;
  constructor(private http: HttpClient) { }


  crearMedico() {
    this.medico = new MedicoDTO();
    this.medico.id = 1;
    this.medico.cedula = "24660783";
    this.medico.nombre = "DoctorArias";
    this.medico.email = "doctorarias@gmail.com";
    this.medico.password = "doctorarias123";
    this.medico.urlFotoPersonal = "https://res.cloudinary.com/duhcmfydk/image/upload/v1710087571/EvoVitalImages/klxuhwqcyemw0zi6bvw3.png";
    this.medico.ciudadResidencia = "Filandia";
    this.medico.telefono = "3111234567";
    this.medico.idEspecialidad = 1;
    this.medico.horarios = [];
    this.medico.horarios.push({id: 1, dia: 1, horaInicio: "08:00", horaSalida: "17:00"});
    this.medico.horarios.push({id: 2, dia: 2, horaInicio: "08:00", horaSalida: "17:00"});
    this.medico.horarios.push({id: 3, dia: 3, horaInicio: "08:00", horaSalida: "17:00"});
    this.medico.horarios.push({id: 4, dia: 4, horaInicio: "08:00", horaSalida: "17:00"});
    this.medico.horarios.push({id: 5, dia: 5, horaInicio: "08:00", horaSalida: "17:00"});

    this.http.post('http://localhost:8080/api/administrador/crear/medico', this.medico).subscribe((data) => {
      console.log(data);
    });
    
  }
}
