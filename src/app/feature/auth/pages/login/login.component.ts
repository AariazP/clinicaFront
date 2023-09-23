import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private router:Router;

  constructor(router:Router) {
    this.router = router;
  }


  index() {
    this.router.navigate(['/auth']);
  }
}
