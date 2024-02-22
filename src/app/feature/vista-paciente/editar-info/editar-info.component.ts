import {Component} from '@angular/core';
import {UserService} from "../../../core/services/UserService";
import {PacienteDTOPaciente} from "../../../core/dto/paciente/PacienteDTOPaciente";

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent {

  userInfo: PacienteDTOPaciente;

  constructor(private userService: UserService) {

  }


}
