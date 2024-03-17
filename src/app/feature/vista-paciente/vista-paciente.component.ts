import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { InfoConsultaDTO } from 'src/app/core/dto/consulta/InfoConsultaDTO';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { UsuarioactivoService } from 'src/app/core/services/usuarioactivo.service';


@Component({
  selector: 'app-vista-paciente',
  templateUrl: './vista-paciente.component.html',
  styleUrls: ['./vista-paciente.component.css']
})
export class VistaPacienteComponent implements OnInit{

  

  active: string = 'info';
  id: number = -1;
  listaCitas: InfoConsultaDTO[] = [];

  constructor(private usuarioActivo:UsuarioactivoService, 
                private pacienteService:PacienteService) { }

  ngOnInit(): void {
    this.id = this.usuarioActivo.getId();
    this.pacienteService.listarCitasPaciente(this.id).subscribe(
      (response) => {
        this.listaCitas = response.respuesta;
      }
    );
  }

  changeView(view: string) {
    this.active = view;
  }
    

}
