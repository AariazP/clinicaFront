import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../core/services/token.service";

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {

  constructor(private tokenService: TokenService) {
  }

  cerrarSesion() {
    this.tokenService.logout();
  }
}
