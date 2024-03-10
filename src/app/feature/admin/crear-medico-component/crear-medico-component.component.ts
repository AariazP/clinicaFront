import { Component } from '@angular/core';
import { MedicoService } from 'src/app/core/services/medicoService.service';

@Component({
  selector: 'app-crear-medico-component',
  templateUrl: './crear-medico-component.component.html',
  styleUrls: ['./crear-medico-component.component.css']
})
export class CrearMedicoComponentComponent {


  constructor(private medicoService:MedicoService) { }

  ngOnInit(): void {

  }


  public crearMedico(): void {
    this.medicoService.crearMedico();
  }




}
