import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../core/services/token.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  private router: Router;
  isLogged = () => {
    return this.tokenService.isLogged();
  };

  constructor(router: Router, private tokenService: TokenService) {
    this.router = router;
  }


  public singUp(): void {
    this.router.navigate(["/auth/login"]);
  }


  SignIn() {
    this.router.navigate(["/register1"]);
  }

  LogOut() {
    this.tokenService.logout()
  }

  IrACuenta() {
    const rol = () => { this.tokenService.getRol();}


  }
}
