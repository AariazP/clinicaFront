import {HorarioDTO} from "../horario/HorarioDTO";

export class MedicoDTO {
    id: number;
    cedula: string;
    nombre: string;
    email: string;
    password: string;
    urlFotoPersonal: string;
    ciudadResidencia: string;
    telefono: string;
    idEspecialidad: number;
    horarios: HorarioDTO[];
}
