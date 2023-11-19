import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/services/UserService";
import {PacienteDTOPaciente} from "../../../../core/dto/paciente/PacienteDTOPaciente";
import {TokenService} from "../../../../core/services/token.service";

@Component({
    selector: 'app-perfil-paciente',
    templateUrl: './perfil-paciente.component.html',
    styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent implements OnInit {

    userInfo: PacienteDTOPaciente;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userInfo = this.userService.getUserInfo();
    }


}
