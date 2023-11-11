import {Injectable} from '@angular/core';
import {PacienteDTO} from "../dto/PacienteDTO";

@Injectable({
    providedIn: 'root'
})

/**
 * Clase encargada de almacenar el estado de los datos del registro1
 * para luego ser usados en el registro2
 */
export class DataRegisterService {
    pacienteDTO : PacienteDTO;

    constructor() {
    }
    getState(): PacienteDTO{
        return this.pacienteDTO;
    }

    setState(pacienteDTO : PacienteDTO) {
        this.pacienteDTO = pacienteDTO;
    }
}

