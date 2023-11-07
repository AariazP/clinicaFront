import {Injectable} from '@angular/core';
import {RegisterState} from "../dto/RegisterState";

@Injectable({
    providedIn: 'root'
})

/**
 * Clase encargada de almacenar el estado de los datos del registro1
 * para luego ser usados en el registro2
 */
export class DataRegisterService {
    registerState: RegisterState;

    constructor() {
    }
    getState(): RegisterState {
        return this.registerState;
    }

    setState(registerState: RegisterState) {
        this.registerState = registerState;
    }
}

