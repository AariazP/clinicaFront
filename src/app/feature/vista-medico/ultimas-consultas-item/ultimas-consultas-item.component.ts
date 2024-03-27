import { Component, Input } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';

@Component({
  selector: 'app-ultimas-consultas-item',
  templateUrl: './ultimas-consultas-item.component.html',
  styleUrls: ['./ultimas-consultas-item.component.css']
})
export class UltimasConsultasItemComponent {
  @Input() cita:ConsultaDTOMedico;
}
