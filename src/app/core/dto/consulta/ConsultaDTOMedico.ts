import {PacienteDTOMedico} from "../paciente/PacienteDTOMedico";

export class ConsultaDTOMedico {
    idConsulta : number;
    paciente : PacienteDTOMedico;
    fechaYHoraAtencion : Date;
    motivo : String;
    estado: string;
}
