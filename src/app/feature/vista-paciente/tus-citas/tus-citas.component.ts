import { Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { InfoConsultaDTO } from 'src/app/core/dto/consulta/InfoConsultaDTO';

@Component({
  selector: 'app-tus-citas',
  templateUrl: './tus-citas.component.html',
  styleUrls: ['./tus-citas.component.css']
})
export class TusCitasComponent {

  @Input() citas: InfoConsultaDTO[] = [];

}
