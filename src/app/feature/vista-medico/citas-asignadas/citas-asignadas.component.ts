import { Component, OnInit } from '@angular/core';
import { co } from '@fullcalendar/core/internal-common';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { DetalleCitaService } from 'src/app/core/services/detalle-cita.service';
import { MedicoService } from 'src/app/core/services/medicoService.service';

@Component({
  selector: 'app-citas-asignadas',
  templateUrl: './citas-asignadas.component.html',
  styleUrls: ['./citas-asignadas.component.css']
})
export class CitasAsignadasComponent implements OnInit {


  citasPendientes: ConsultaDTOMedico[];
  citasAnteriores: ConsultaDTOMedico[];

  constructor(private medicoService: MedicoService,
    private detalleCitaService: DetalleCitaService) {
    this.citasPendientes = [];
    this.citasAnteriores = [];
  }


  ngOnInit(): void {

    this.llenarCitas();
    

  }

  mostrarDetalle(cita: ConsultaDTOMedico) {
    this.detalleCitaService.setCita(cita);
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
    this.mostrarDetalle(this.citasPendientes[0]);
  }
}
