import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cons, async } from 'rxjs';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { PacienteDTO } from 'src/app/core/dto/paciente/PacienteDTO';
import { AtencionCitaService } from 'src/app/core/services/atencion-cita.service';
import { MedicoService } from 'src/app/core/services/medicoService.service';
import { Utils } from 'src/app/core/utils/utils';
import { ResumenConsultaComponent } from './resumen-consulta/resumen-consulta.component';

@Component({
  selector: 'app-medico-hacerconsulta',
  templateUrl: './medico-hacerconsulta.component.html',
  styleUrls: ['./medico-hacerconsulta.component.css']
})
export class MedicoHacerconsultaComponent implements OnInit {

  cita: ConsultaDTOMedico;
  paciente: PacienteDTO;
  resumen: ResumenConsultaComponent;

  constructor(private atencionCita: AtencionCitaService,
    private medicoService: MedicoService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.cita = this.atencionCita.cita;
    this.setPaciente();
  }

  async setPaciente() {
    await this.medicoService.getPaciente(this.cita.idConsulta).subscribe(

      data => {
        this.paciente = data.respuesta;
      },
      error => {
      }

    );

  }


}
