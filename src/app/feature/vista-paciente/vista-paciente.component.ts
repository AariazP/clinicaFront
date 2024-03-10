import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-paciente',
  templateUrl: './vista-paciente.component.html',
  styleUrls: ['./vista-paciente.component.css']
})
export class VistaPacienteComponent {


  active: string = 'info';


  changeView(view: string) {
    this.active = view;
  }
    

}
