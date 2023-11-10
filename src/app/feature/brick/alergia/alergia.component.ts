import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alergia',
  templateUrl: './alergia.component.html',
  styleUrls: ['./alergia.component.css']
})
export class AlergiaComponent {
  @Input() mensaje : String;
}