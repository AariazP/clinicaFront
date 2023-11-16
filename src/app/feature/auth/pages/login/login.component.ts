import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthLoginDTO} from "../../../../core/dto/authLoginDTO";
import {AuthService} from "../../../../core/services/auth.service";
import {Utils} from "../../../../core/utils/utils";
import {AuthLoginResponseDto} from "../../../../core/dto/authLoginResponseDto";
import {FormControl, ValidatorFn} from "@angular/forms";
import {TokenService} from "../../../../core/services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private router: Router;
  public loginForm: FormGroup;

  constructor(router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService) {
    this.router = router;
    this.initializeForm();
  }


  get emailNoValid() {
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }


  get passwordNoValid() {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }

  private initializeForm(): void {

    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.maxLength(31)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(31)]],

    });

  }

  /**
   * This method is used to navigate to the index page
   */
  public index(): void {
    this.router.navigate(['/']);
  }

  /**
   * This method is used to sign in the user
   */
  public signIn(): void {

    let dtoLogin: AuthLoginDTO;


    if (this.loginForm.valid) {
      dtoLogin = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }

      this.login(dtoLogin);

    } else {
      this.showAlertError();
    }
  }

  private showAlertError(): void {
    Utils.showAlertError('Verifica los campos')
  }

  private login(dtoLogin: AuthLoginDTO): void {

    this.authService.login(dtoLogin).subscribe(
      response => {
        let token = response.respuesta.token
        this.tokenService.setToken(token);
        let userValues = this.tokenService.decodePayload(token);
        //TODO Aqui se debe navegar a la vista pertinente segun el rol del usuario.
        // El rol del usuario de obitene mediante los valoes del token que está justo
        // en la linea de arriba.
      },
      error => {
        Utils.showAlertError(error.error.Error);
      }
    );
  }


  private navigateToRole(response: AuthLoginResponseDto): void {
    if (response.rol === 'ADMIN') this.router.navigate([`/admin`]);
  }
}
