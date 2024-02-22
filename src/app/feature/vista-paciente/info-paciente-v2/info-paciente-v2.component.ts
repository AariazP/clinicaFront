import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PacienteDTOPaciente } from 'src/app/core/dto/paciente/PacienteDTOPaciente';
import { UserService } from 'src/app/core/services/UserService';

@Component({
  selector: 'app-info-paciente-v2',
  templateUrl: './info-paciente-v2.component.html',
  styleUrls: ['./info-paciente-v2.component.css']
})
export class InfoPacienteV2Component {


  userInfo: Observable<PacienteDTOPaciente>;


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userInfo = this.userService.getUserInfo();
  }


  deleteUser() {
    
  }
    editInfo() {
  
  }
}
