import { Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Utils } from 'src/app/core/utils/utils';
import { S, co } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent {

  citas: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    weekends: false,
    events: this.citas
  };
  
  
  consulta: ConsultaDTOPaciente;
  fecha:string;
  

  constructor() {
      this.citas = [
        { title: 'Cita \n 10:00 ', 
          hora: '10:00',
        date: '2024-03-01' },
        { title: 'event 2', date: '2019-04-02' }
      ];

      this.fecha = "";
   }

  ngOnInit(): void {
    this.consulta = new ConsultaDTOPaciente();
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
}
