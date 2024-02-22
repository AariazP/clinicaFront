import { Component } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent {


  consulta: ConsultaDTOPaciente;

  selectedPaymentMethod!: string;

  constructor() { }

  ngOnInit(): void {
    this.consulta = new ConsultaDTOPaciente();
  }
}
