import { Component, OnInit } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { DetalleCitaService } from 'src/app/core/services/detalle-cita.service';

@Component({
  selector: 'app-detalle-consulta-medico',
  templateUrl: './detalle-consulta-medico.component.html',
  styleUrls: ['./detalle-consulta-medico.component.css']
})
export class DetalleConsultaMedicoComponent implements OnInit{


  cita:ConsultaDTOMedico; 
  paciente:String;

  constructor(private service:DetalleCitaService) { }

  ngOnInit(): void {
    this.service.setComponente(this);
  }



}
