import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MetodoPagoDTO } from 'src/app/core/dto/consulta/MetodoPagoDTO';
import { MedicoService } from 'src/app/core/services/medicoService.service';
import { PagoServiceService } from 'src/app/core/services/pago-service.service';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-pagar-consulta',
  templateUrl: './pagar-consulta.component.html',
  styleUrls: ['./pagar-consulta.component.css']
})
export class PagarConsultaComponent {

  listaEstados: string[];
  listaMetodosPago: string[];
  box_estado: '';
  box_metodoPago: '';
  form:FormGroup;
  metodoPago: MetodoPagoDTO;

  constructor(private fb:FormBuilder,
    private medicoservice: MedicoService,
    private router: Router,
    private pagoService: PagoServiceService
    ) {
    this.listaEstados = ['Pendiente', 'Pagado', 'Cancelado'];
    this.listaMetodosPago = ['Tarjeta de crédito', 'Tarjeta débito', 'Efectivo', 'Transferencia'];
    this.form = this.fb.group({
      estado: [''],
      metodoPago: [''],
      valor: [''],
      descripcion: [''],
      fecha: ['']
    });
  }

  async pagarConsulta() {

    this.metodoPago = new MetodoPagoDTO();
    this.metodoPago.estado = this.form.get('estado').value;
    this.metodoPago.metodoPago = this.form.get('metodoPago').value;
    this.metodoPago.valor = this.form.get('valor').value;
    this.metodoPago.descripcion = this.form.get('descripcion').value;
    this.metodoPago.fecha = this.form.get('fecha').value;

    await this.medicoservice.saveMetodoPago(this.metodoPago, this.pagoService.getCita().idConsulta).subscribe(data => {
      Utils.showAlertSuccess("Se ha realizado el pago de la consulta");
    });

    //espero a que se guarde el metodo de pago 2 segundos y redirijo a la vista del medico
    setTimeout(() => {
      this.router.navigate(['/vista-medico']);
    }, 2000);

    this.router.navigate(['/vista-medico']);


  }

}
