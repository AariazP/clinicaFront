import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }



  public singUp(): void {
    this.route.navigate(["/auth/login"]);
  }



}
