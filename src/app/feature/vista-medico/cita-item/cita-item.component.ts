import { Component, Input } from '@angular/core';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { CitaService } from 'src/app/core/services/cita.service';

@Component({
  selector: 'app-cita-item',
  templateUrl: './cita-item.component.html',
  styleUrls: ['./cita-item.component.css']
})
export class CitaItemComponent {

  @Input() cita:ConsultaDTOMedico;
  @Input() index:number;

  constructor(private citaService: CitaService) { }


  cancelarCita() {
    this.citaService.cancelarCita(this.cita.idConsulta);
  }

  atenderCita() {
    console.log("Cita atendida"+ " "+ this.cita.idConsulta);
    console.log("Estado de la cita: "+ this.cita.estado);
  }
    

}
