import {MensajeDTOAdministrador} from "../mensaje/MensajeDTOAdministrador";

export class InfoPQRSDTO {

        idPQRS: number;
        estado: string;
        idConsulta: number;
        nombrePaciente: string;
        fecha: Date;
        mensajes: MensajeDTOAdministrador[]
}
