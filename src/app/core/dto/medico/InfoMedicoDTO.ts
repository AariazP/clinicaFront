import {HorarioDTO} from "../horario/HorarioDTO";

export  class  InfoMedicoDTO {
    codigo: number;
    nombre: string;
    cedula: string;
    ciudad: string;
    especialidad: string;
    telefono: string;
    correo: string;
    horarios: HorarioDTO[];
}
