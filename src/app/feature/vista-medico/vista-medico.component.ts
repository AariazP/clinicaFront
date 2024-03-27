import { Component, OnInit } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { MedicoService } from 'src/app/core/services/medicoService.service';

@Component({
  selector: 'app-vista-medico',
  templateUrl: './vista-medico.component.html',
  styleUrls: ['./vista-medico.component.css']
})
export class VistaMedicoComponent implements OnInit {

  citasPendientes: ConsultaDTOMedico[];
  citasAnteriores: ConsultaDTOMedico[];

  constructor(private medicoService: MedicoService) {
    this.citasPendientes = [];
    this.citasAnteriores = [];
  }

  ngOnInit(): void {
    this.llenarCitas();
  }

  async llenarCitas() {

    await this.medicoService.getListaConsultas().forEach(data => {

      data.respuesta.forEach((cita: ConsultaDTOMedico) => {
        let aux = new ConsultaDTOMedico();
        aux.idConsulta = cita.idConsulta;
        aux.fechaYHoraAtencion = cita.fechaYHoraAtencion;
        aux.motivo = cita.motivo;
        aux.paciente = cita.paciente;
        aux.estado = cita.estado;
        if (aux.estado == "Pendiente"){
          this.citasPendientes.push(aux);
        }else if(aux.estado == "Atendida" || aux.estado == "Cancelada"){
          this.citasAnteriores.push(aux);
        } 
      }
      )
    });
  }
}
