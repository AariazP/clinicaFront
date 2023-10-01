import {FormGroup} from "@angular/forms";

export class AppBaseComponent{

  public isTouchedField=(form:FormGroup, field:string):boolean => {
    return form.get(field)?.touched && form.get(field)?.invalid;
  }

}
