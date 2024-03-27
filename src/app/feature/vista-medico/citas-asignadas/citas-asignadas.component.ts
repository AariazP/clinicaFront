import { Component, Input, OnInit } from '@angular/core';
import { co } from '@fullcalendar/core/internal-common';
import { Cons } from 'rxjs';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { DetalleCitaService } from 'src/app/core/services/detalle-cita.service';
import { MedicoService } from 'src/app/core/services/medicoService.service';

@Component({
  selector: 'app-citas-asignadas',
  templateUrl: './citas-asignadas.component.html',
  styleUrls: ['./citas-asignadas.component.css']
})
export class CitasAsignadasComponent{


  @Input()citas:ConsultaDTOMedico[];

  constructor(private detalleCitaService: DetalleCitaService) {
    this.citas = [];
  }


  afterViewInit(): void {
    this.detalleCitaService.setCita(this.citas[0]);
  }

  mostrarDetalleCita(cita:ConsultaDTOMedico){
    this.detalleCitaService.setCita(cita);
  }
  
}
