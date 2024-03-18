import { Component, OnInit } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { MedicoService } from 'src/app/core/services/medicoService.service';

@Component({
  selector: 'app-citas-asignadas',
  templateUrl: './citas-asignadas.component.html',
  styleUrls: ['./citas-asignadas.component.css']
})
export class CitasAsignadasComponent implements OnInit {

  citas: ConsultaDTOMedico[];

  constructor(private medicoService: MedicoService) {
    this.citas = [];
  }


  ngOnInit(): void {

    this.medicoService.getListaConsultas().forEach(data => {

      data.respuesta.forEach((cita: ConsultaDTOMedico) => {
        this.citas.push(cita);
      }
      )
    });

  }

}
