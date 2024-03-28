import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { co } from '@fullcalendar/core/internal-common';
import { Cons } from 'rxjs';
import { AtencionConsultaDTOMedico } from 'src/app/core/dto/atencionConsulta/AtencionConsultaDTOMedico';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { MedicoService } from 'src/app/core/services/medicoService.service';
import { PagoServiceService } from 'src/app/core/services/pago-service.service';
import { Utils } from 'src/app/core/utils/utils';


@Component({
  selector: 'app-resumen-consulta',
  templateUrl: './resumen-consulta.component.html',
  styleUrls: ['./resumen-consulta.component.css']
})
export class ResumenConsultaComponent {


  form:FormGroup;
  atencionConsulta: AtencionConsultaDTOMedico;
  @Input() cita: ConsultaDTOMedico;

  constructor( private fb: FormBuilder,
    private medicoService: MedicoService,
    private router: Router,
    private pagoService: PagoServiceService) { 

    this.form = this.fb.group({
      notasMedicas: [''],
      diagnostico: [''],
      tratamiento: [''],
      sintomas: ['']
    });

  }

  async finalizarConsulta() {
    
    this.atencionConsulta = new AtencionConsultaDTOMedico();
    this.atencionConsulta.notasMedicas = this.form.get('notasMedicas').value;
    this.atencionConsulta.diagnostico = this.form.get('diagnostico').value;
    this.atencionConsulta.tratamiento = this.form.get('tratamiento').value;
    this.atencionConsulta.sintomas = this.form.get('sintomas').value;
  
    await this.medicoService.saveAtencionConsulta(this.atencionConsulta, this.cita.idConsulta).subscribe(data => {
      Utils.showAlertSuccess("Atencion de consulta guardada");
    });
    this.pagoService.setCita(this.cita);
    this.router.navigate(['/pagar-consulta']);
  }
  
  cancelarConsulta() {
    this.medicoService.cancelarCita(this.cita.idConsulta).subscribe(data => {
      Utils.showAlertSuccess("Cita cancelada");
    });
    this.router.navigate(['/vista-medico']);
    window.location.reload();
  }


}
