import {AtencionConsultaDTOPaciente} from "../atencionConsulta/AtencionConsultaDTOPaciente";
import {PQRSDTOPaciente} from "../pqrs/PQRSDTOPaciente";
import {MedicoDTOPaciente} from "../medico/MedicoDTOPaciente";

export class DetalleConsultaDTOPaciente {

    medico: MedicoDTOPaciente;
    pqrs: PQRSDTOPaciente;
    atencionConsulta: AtencionConsultaDTOPaciente;
    fechaCreacion: Date;
    fechaYHoraAtencion: Date;
    estadoConsulta: String;
    motivo: String;
}
