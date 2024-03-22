import { Injectable, OnInit } from '@angular/core';
import { ConsultaDTOMedico } from '../dto/consulta/ConsultaDTOMedico';
import { DetalleConsultaMedicoComponent } from 'src/app/feature/vista-medico/detalle-consulta-medico/detalle-consulta-medico.component';
import { MedicoService } from './medicoService.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleCitaService implements OnInit{

  component:DetalleConsultaMedicoComponent;

  constructor(private medicoService:MedicoService) { }

  ngOnInit(): void {
 
  }

  async setCita(cita:ConsultaDTOMedico){
    this.component.cita = cita;

    await this.medicoService.getListaConsultas().subscribe((data) => {

      data.respuesta.forEach((cita: ConsultaDTOMedico) => {
        this.component.paciente = cita.paciente.nombre;
      });

    });

  }


  setComponente(component: DetalleConsultaMedicoComponent) {
    this.component = component;
  }

}
