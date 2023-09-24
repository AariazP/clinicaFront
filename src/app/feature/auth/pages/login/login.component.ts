import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private router:Router;
  public loginForm:FormGroup;

  constructor(router:Router, fb:FormBuilder) {
    this.router = router;
    this.loginForm = fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]});

  }

  /**
   * This method is used to navigate to the index page
   */
  public index():void {
    this.router.navigate(['/auth']);
  }

  /**
   * This method is used to sign in the user
   */
  public signIn():void {

    if(this.loginForm.valid) console.log('El formulario es valido');
    else console.log('El formulario es invalido');

  }

}
