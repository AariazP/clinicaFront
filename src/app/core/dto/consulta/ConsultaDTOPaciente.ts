import {MedicoDTOPaciente} from "../medico/MedicoDTOPaciente";

export class ConsultaDTOPaciente {

    medico : MedicoDTOPaciente;
    estadoConsulta : String;
    fechaYHoraAtencion : Date;
    metodoDePago : String;
    motivo: String;
}
