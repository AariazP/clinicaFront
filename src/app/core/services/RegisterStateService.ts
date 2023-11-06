import {RegisterState} from "../dto/RegisterState";

export class RegisterStateService {
    public  registerState : RegisterState;

    constructor(registerState : RegisterState) {
        this.registerState = registerState;
    }
}
