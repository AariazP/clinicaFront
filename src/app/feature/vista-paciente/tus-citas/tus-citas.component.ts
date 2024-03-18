import { Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { InfoConsultaDTO } from 'src/app/core/dto/consulta/InfoConsultaDTO';
import { CitaService } from 'src/app/core/services/cita.service';
import { UsuarioactivoService } from 'src/app/core/services/usuarioactivo.service';

@Component({
  selector: 'app-tus-citas',
  templateUrl: './tus-citas.component.html',
  styleUrls: ['./tus-citas.component.css']
})
export class TusCitasComponent {

    citas: ConsultaDTOPaciente[];


  constructor(private usuarioActivo:UsuarioactivoService, 
                  private citaService:CitaService) {
                    this.citas = [];
                   }

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas() {

    this.citaService.listarCitasPaciente(Number(this.usuarioActivo.getId())).forEach(data => {

      data.respuesta.forEach((cita: ConsultaDTOPaciente) => {
        this.citas.push(cita);
      }


      )});

  }

  //cargo las citas del paciente cada vez que se muestra el componente

  ngBeforeViewInit() {
    this.cargarCitas();
  }

}
