import { Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    weekends: false,
    events: [
      { title: 'Cita \n 10:00 ', 
        hora: '10:00',
      date: '2024-03-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  consulta: ConsultaDTOPaciente;

  selectedPaymentMethod!: string;
  

  constructor() { }

  ngOnInit(): void {
    this.consulta = new ConsultaDTOPaciente();
  }

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}
