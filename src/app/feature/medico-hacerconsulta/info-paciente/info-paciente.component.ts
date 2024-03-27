import { Component, Input } from '@angular/core';
import { PacienteDTO } from 'src/app/core/dto/paciente/PacienteDTO';

@Component({
  selector: 'app-info-paciente',
  templateUrl: './info-paciente.component.html',
  styleUrls: ['./info-paciente.component.css']
})
export class InfoPacienteComponent {
  @Input() paciente: PacienteDTO;
}
