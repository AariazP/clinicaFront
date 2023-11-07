import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {PacienteDTO} from "../../../../core/dto/PacienteDTO";


@Component({
    selector: 'app-form-register1',
    templateUrl: './form-register1.component.html',
    styleUrls: ['./form-register1.component.css']
})
export class FormRegister1Component implements OnInit {

    registerForm: FormGroup
    pacienteDTO: PacienteDTO

    ngOnInit(): void {
        this.initializeFormGroup();
    }


    constructor(private fb: FormBuilder) {
        this.pacienteDTO = new PacienteDTO();
    }

    public registrar(): void {
        console.log(this.pacienteDTO)
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
        console.log(Object.values(this.registerForm.value))
    }
}
