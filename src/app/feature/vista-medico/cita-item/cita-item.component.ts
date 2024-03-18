import { Component, Input } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';

@Component({
  selector: 'app-cita-item',
  templateUrl: './cita-item.component.html',
  styleUrls: ['./cita-item.component.css']
})
export class CitaItemComponent {

  @Input() cita:ConsultaDTOMedico;

}
