import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../../core/utils/AppBaseComponent";
import {AuthLoginDTO} from "../../../../core/dto/authLoginDTO";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBaseComponent{

  private router:Router;
  public loginForm:FormGroup;

  constructor(router:Router, fb:FormBuilder, private authService:AuthService) {
    super();
    this.router = router;
    this.loginForm = fb.group({
      email: ['',Validators.required, Validators.email, Validators.maxLength(50)],
      password: ['',Validators.required, Validators.minLength(8)]});

  }

  /**
   * This method is used to navigate to the index page
   */
  public index():void {
    this.router.navigate(['/']);
  }

  /**
   * This method is used to sign in the user
   */
  public signIn():void {

    let dtoLogin:AuthLoginDTO;

   // if(this.loginForm.valid){
      console.log('El formulario es valido');
      dtoLogin={
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }
      this.authService.login(dtoLogin);
      console.log(dtoLogin);
   // }
  //  else console.log('El formulario es invalido');
  }

  public getErrorsForm(field:string):string {

    if(this.loginForm.get(field)?.errors?.['required']){
      return 'El campo es requerido';
    }
    else if(this.loginForm.get(field)?.errors?.['email']){
      return 'El campo debe ser un email';
    }
    else if(this.loginForm.get(field)?.errors?.['minlength']){
      return 'El campo debe tener minimo 8 caracteres';
    }
    else if(this.loginForm.get(field)?.errors?.['maxlength']){
      return 'El campo debe tener maximo 50 caracteres';
    }
    else return '';
  }

}
