import { Component, Input } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';


@Component({
  selector: 'app-historial-consultas',
  templateUrl: './historial-consultas.component.html',
  styleUrls: ['./historial-consultas.component.css']
})
export class HistorialConsultasComponent {

  @Input()citas:ConsultaDTOMedico[];

  constructor() { 
    this.citas = [];
  }

  
}
