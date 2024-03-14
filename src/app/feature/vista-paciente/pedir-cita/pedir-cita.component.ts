import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Utils } from 'src/app/core/utils/utils';
import { co } from '@fullcalendar/core/internal-common';
import { MedicoDTOPaciente } from 'src/app/core/dto/medico/MedicoDTOPaciente';
import { CitaService } from 'src/app/core/services/cita.service';


@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent {


  citas: any[] = [];
  horasCerradas: string[] = ['8:00', '9:00','10:00','11:00', '14:00', '15:00', '16:00', '17:00'];
  consulta: ConsultaDTOPaciente;
  fecha:string;
  observaciones: string;
  horaSeleccionada: string;
  medicoDTO: MedicoDTOPaciente;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    weekends: false,
    events: this.citas
  };
  
  
  
  

  constructor(private cdr: ChangeDetectorRef, private citaService: CitaService) {
      this.citas = [
        { title: 'Cita \n 10:00 ', 
          hora: '10:00',
        date: '2024-03-01' },
        { title: 'event 2', date: '2019-04-02' }
      ];

      this.fecha = "";
   }

  ngOnInit(): void {

    this.observaciones = "";
    this.consulta = new ConsultaDTOPaciente();
    this.medicoDTO = new MedicoDTOPaciente();
    this.medicoDTO.idMedico = 1;
    this.medicoDTO.nombre = "DoctorArias";
    this.medicoDTO.especialidad = "Medicina General";
    this.horaSeleccionada = "8:00";

    
  }

  handleDateClick(arg:any) {
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
    console.log(this.horaSeleccionada);
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
        this.consulta.estadoConsulta = "Pendiente";
        this.consulta.fechaYHoraAtencion = new Date(this.fecha+"T"+this.horaSeleccionada+":00");
        this.consulta.medico = this.medicoDTO;
        this.consulta.motivo = this.observaciones;
        console.log(this.consulta);
        this.citaService.saveCita(this.consulta);
        Utils.showAlertSuccess("Cita solicitada con éxito");
      }
    });

  }
}
