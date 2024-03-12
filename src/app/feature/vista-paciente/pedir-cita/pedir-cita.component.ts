import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ConsultaDTOPaciente } from 'src/app/core/dto/consulta/ConsultaDTOPaciente';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Utils } from 'src/app/core/utils/utils';
import { co } from '@fullcalendar/core/internal-common';


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
  horaSeleccionada: string;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    weekends: false,
    events: this.citas
  };
  
  
  
  

  constructor(private cdr: ChangeDetectorRef) {
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

  onHoraChange(event: EventTarget) {
    console.log(event);
    if (event instanceof InputEvent) {
      this.horaSeleccionada = (event.target as HTMLInputElement).value;
      console.log(this.horaSeleccionada);
      this.cdr.detectChanges();
    }
  }
    
}
