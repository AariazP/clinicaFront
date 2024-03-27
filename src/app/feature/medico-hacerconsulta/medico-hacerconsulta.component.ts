import { Component, OnInit } from '@angular/core';
import { Cons, async } from 'rxjs';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { PacienteDTO } from 'src/app/core/dto/paciente/PacienteDTO';
import { AtencionCitaService } from 'src/app/core/services/atencion-cita.service';
import { MedicoService } from 'src/app/core/services/medicoService.service';

@Component({
  selector: 'app-medico-hacerconsulta',
  templateUrl: './medico-hacerconsulta.component.html',
  styleUrls: ['./medico-hacerconsulta.component.css']
})
export class MedicoHacerconsultaComponent implements OnInit {

  cita: ConsultaDTOMedico;
  paciente: PacienteDTO;

  constructor(private atencionCita: AtencionCitaService,
    private medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    this.cita = this.atencionCita.cita;
    this.setPaciente();
    console.log(this.paciente);
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



  finalizarConsulta() {
    console.log("Consulta finalizada");
  }
  cancelarConsulta() {
    console.log("Consulta cancelada");
  }

}
