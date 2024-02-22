import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {DataRegisterService} from "../../../../core/services/DataRegister.service";
import {Utils} from "../../../../core/utils/utils";
import {Router} from "@angular/router";
import {PacienteDTO} from "../../../../core/dto/paciente/PacienteDTO";


@Component({
    selector: 'app-form-register1',
    templateUrl: './form-register1.component.html',
    styleUrls: ['./form-register1.component.css']
})
export class FormRegister1Component implements OnInit {
    router: Router;
    registerForm: FormGroup
    pacienteDTO: PacienteDTO;

    ngOnInit(): void {
        this.initializeFormGroup();
        this.pacienteDTO = new PacienteDTO();
    }


    constructor(router: Router, private fb: FormBuilder, private sharedData: DataRegisterService) {
        this.router = router;
    }

    get emailNoValid() {
        return this.registerForm.get('email')?.invalid && this.registerForm.get('email')?.touched;
    }


    get passwordNoValid() {
        return this.registerForm.get('password')?.invalid && this.registerForm.get('password')?.touched;
    }

    private initializeFormGroup() {
        this.registerForm = this.fb.group({
            nombre: ['', Validators.required],
            cedula: ['', Validators.required],
            fechaNacimiento: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmation: ['', Validators.required],
            ciudadResidencia: ['', Validators.required],
            telefono: ['', Validators.required]
        })
    }

    public passwordsMatch(): boolean {
        const password = this.registerForm.get('password');
        const confirmation = this.registerForm.get('confirmation');

        // Check if the passwords are different
        if (password.value !== confirmation.value) {
            // Check if the form controls are  touched
            if (password.touched && confirmation.touched) {
                return true;
            }
        }
        return false;
    }


    continuar() {
        if (this.registerForm.valid) {
            this.pacienteDTO.nombre = this.registerForm.get('nombre')?.value;
            this.pacienteDTO.cedula = this.registerForm.get('cedula')?.value;
            this.pacienteDTO.fechaNacimiento = this.registerForm.get('fechaNacimiento')?.value;
            this.pacienteDTO.email = this.registerForm.get('email')?.value;
            this.pacienteDTO.password = this.registerForm.get('password')?.value;
            this.pacienteDTO.ciudadResidencia = this.registerForm.get('ciudadResidencia')?.value;
            this.pacienteDTO.telefono = this.registerForm.get('telefono')?.value;
            /*
            La siguiente linea es importante. Se llama al servicios que guarda estados
            luego seteamos el dto en el mismo para que lo recuerde y en la siguiente vista (register2)
            lo usaremos para enviarselo a la API del backend.
            */
            this.sharedData.setState(this.pacienteDTO);
            this.router.navigate(['/register2']);

        } else {
            Utils.showAlertError("Verifica los campos")
        }
    }
}
