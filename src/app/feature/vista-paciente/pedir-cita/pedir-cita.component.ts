import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Utils } from 'src/app/core/utils/utils';
import { co } from '@fullcalendar/core/internal-common';
import { MedicoDTOPaciente } from 'src/app/core/dto/medico/MedicoDTOPaciente';
import { CitaService } from 'src/app/core/services/cita.service';
import { InfoConsultaDTO } from 'src/app/core/dto/consulta/InfoConsultaDTO';
import { UsuarioactivoService } from 'src/app/core/services/usuarioactivo.service';
import { medico } from 'src/environments/medico.development';


@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent {


  citas: any[] = [];
  horasCerradas: string[] = ['8:00', '9:00','10:00','11:00', '14:00', '15:00', '16:00', '17:00'];
  consulta: InfoConsultaDTO;
  private medicoDTO = medico.medicoDTO;
  fecha:string;
  observaciones: string;
  horaSeleccionada: string;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    weekends: false,
    events: this.citas
  };
  
  
  
  

  constructor(private cdr: ChangeDetectorRef, 
                private citaService: CitaService, 
                private usuarioActivo: UsuarioactivoService) {
      this.citas = [
        { title: 'Cita \n 10:00 ', 
          hora: '10:00',
        date: '2024-03-01' },
        { title: 'event 2', date: '2019-04-02' }
      ];
      this.horaSeleccionada = "";

      this.fecha = "";
   }

  ngOnInit(): void {

    this.observaciones = "";
    this.consulta = new InfoConsultaDTO();
   

    
  }

  handleDateClick(arg:any) {

    //comparo la fecha seleccionada con la fecha actual
    let fechaActual = new Date();
    let fechaSeleccionada = new Date(arg.dateStr.split("-").join("-"));

    if(fechaSeleccionada < fechaActual) {
      Utils.showAlertTitleError("Error", "No se puede seleccionar una fecha anterior a la actual");
      return;
    }

    //verifico que la fecha seleccionada sea al menos 5 días después de la fecha actual

    let fechaMaxima = new Date();
    fechaMaxima.setDate(fechaMaxima.getDate() + 5);

    if(fechaSeleccionada > fechaMaxima) {
      Utils.showAlertTitleError("Error", "La fecha seleccionada debe ser al menos 5 días después de la fecha actual");
      return;
    }

    Utils.showAlertTitleSuccess("Cita seleccionada", "¿Desea pedir una cita para el día " + arg.dateStr + "?")
    .then(response => {
      if (response) {
        //formateo la arg.dateStr a mm/dd/yyyy
        this.fecha = ""+arg.dateStr.split("-").join("-");
      }
    });
  }

  onHoraChange(event: any) {
    this.horaSeleccionada = event.target.value;
    this.cdr.detectChanges();
  }
  
  pedirCita() {
    
    if (this.fecha === "" || this.horaSeleccionada === "") {
      Utils.showAlertTitleError("Error", "Debe seleccionar una fecha y hora para pedir la cita");
      return;
    }
    Utils.showAlertTitleSuccess("Cita solicitada", "¿Desea pedir una cita para el día " + this.fecha + " a las " + this.horaSeleccionada + "?")
    .then(response => {
      if (response) {

        let year = this.fecha.split("-")[0];
        let month = this.fecha.split("-")[1];
        let day = this.fecha.split("-")[2];

        let hora = Number(this.horaSeleccionada.split(":")[0]) -5 ;
        let minutos = this.horaSeleccionada.split(":")[1];

        this.consulta.fechaYHoraDeAtencion = new Date(Number(year), Number(month)-1, Number(day), Number(hora), Number(minutos));
        this.consulta.idMedico = this.medicoDTO.idMedico;
        this.consulta.idPaciente = this.usuarioActivo.getId();
        this.consulta.motivo = this.observaciones;
        Utils.selectPaymentMethod().then(response => {
          if (response) {
            this.consulta.metodoPago = response;
            this.citaService.saveCita(this.consulta).forEach(data => {
              
            });
            Utils.showAlertSuccess("La consulta ha sido creada");
          } else {
            Utils.showAlertTitleError("Error", "No se ha seleccionado un método de pago");
          }
        });
      }
    });

  }
}
