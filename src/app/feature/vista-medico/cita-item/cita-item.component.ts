import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaDTOMedico } from 'src/app/core/dto/consulta/ConsultaDTOMedico';
import { AtencionCitaService } from 'src/app/core/services/atencion-cita.service';
import { MedicoService } from 'src/app/core/services/medicoService.service';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-cita-item',
  templateUrl: './cita-item.component.html',
  styleUrls: ['./cita-item.component.css']
})
export class CitaItemComponent {

  @Input() cita:ConsultaDTOMedico;
  @Input() index:number;

  constructor(private medicoService: MedicoService, 
    private router:Router,
    private atencionCita: AtencionCitaService
    ) { }


  async cancelarCita() {

    let response = await Utils.cancelarCita("¿Seguro que quiere cancelar esta cita?", "La cita será cancelada y no podrá ser recuperada");
    if(response){
      await this.medicoService.cancelarCita(this.cita.idConsulta).subscribe(data => {
        window.location.reload();
      });
  }
  }

  atenderCita() {
    this.atencionCita.setConsulta(this.cita);
    this.router.navigate(['/atender-cita']);
  }
    

}
