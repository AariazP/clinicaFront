import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { InfoConsultaDTO } from 'src/app/core/dto/consulta/InfoConsultaDTO';
import { CitaService } from 'src/app/core/services/cita.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { UsuarioactivoService } from 'src/app/core/services/usuarioactivo.service';


@Component({
  selector: 'app-vista-paciente',
  templateUrl: './vista-paciente.component.html',
  styleUrls: ['./vista-paciente.component.css']
})
export class VistaPacienteComponent implements OnInit{

  

  active: string = 'info';

  

  ngOnInit(): void {
    
  }

  changeView(view: string) {
    this.active = view;
  }
    

}
