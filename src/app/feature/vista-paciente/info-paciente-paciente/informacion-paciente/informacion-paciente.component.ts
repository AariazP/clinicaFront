import {Component} from '@angular/core';
import {UserService} from "../../../../core/services/UserService";
import {ClinicaService} from "../../../../core/services/clinica.service";
import {PacienteDTO} from "../../../../core/dto/paciente/PacienteDTO";
import {PacienteDTOPaciente} from "../../../../core/dto/paciente/PacienteDTOPaciente";
import {map, Observable} from "rxjs";
import {ImagenService} from "../../../../core/services/imagen.service";
import {PacienteService} from "../../../../core/services/paciente.service";
import {Utils} from "../../../../core/utils/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-informacion-paciente',
  templateUrl: './informacion-paciente.component.html',
  styleUrls: ['./informacion-paciente.component.css']
})
export class InformacionPacienteComponent {

  userInfo$: Observable<PacienteDTOPaciente>;
  // ---- CAMPOS DEL FORMULARIO -----
  nombre: string;
  email: string;
  password: any;

  telefono: string;
  box_eps: string;
  box_ciudad: string;
  // --- CAMPOS AUXILIARES  --------
  listaEPS: string[] = [];
  listaCiudades: string[] = [];

  // Image variables----------
  imageIsLoaded: boolean;
  imageFileList: FileList;
  urlImagen: string | null | '';


  constructor(private userService: UserService,
              private clinicaService: ClinicaService,
              private imagenService: ImagenService,
              private pacienteService: PacienteService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userInfo$ = this.userService.getUserInfo();
    this.cargarCiudades();
    this.cargarEPS();
  }


// COMUNICACION CON LOS ENDPOINTS

  cargarCiudades() {
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.listaCiudades = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  cargarEPS() {
    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.listaEPS = data.respuesta;
        console.log(data)
      },
      error: error => {
        console.log(error);
      }
    });
  }


  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
      this.imageIsLoaded = true;
      this.imageFileList = files;
      this.subirImagen();
    }
  }

  subirImagen() {
    const formData = new FormData();
    formData.append('file', this.imageFileList[0]);
    this.imagenService.subir(formData).subscribe({
      next: data => {
        this.urlImagen = data.respuesta.url
        console.log("IMAGEN SUBIDA CON EXITO")
        console.log(this.urlImagen)
      },
      error: error => {
        console.log(error);
      }
    });
  }

  buildPacienteDTO(): Observable<PacienteDTO> {
    return this.userInfo$.pipe(
      map(data => {
          const pacienteDTO = new PacienteDTO();
          pacienteDTO.nombre = this.nombre === '' ? data.nombre : this.nombre;
          pacienteDTO.cedula = data.cedula;
          pacienteDTO.email = this.email == '' || this.email == null ? data.email : this.email;
          pacienteDTO.password = this.password == '' || this.password == null ? '' : this.password;
          pacienteDTO.fechaNacimiento = data.fechaNacimiento;
          pacienteDTO.alergias = data.alergias;
          pacienteDTO.urlFotoPersonal = this.urlImagen === '' || this.urlImagen == null ? data.urlFotoPersonal : this.urlImagen;
          pacienteDTO.eps = this.box_eps === '' ? data.eps : this.box_eps;
          pacienteDTO.tipoSangre = data.tipoSangre;
          pacienteDTO.ciudadResidencia = this.box_ciudad === '' ? data.ciudadResidencia : this.box_ciudad;
          pacienteDTO.telefono = this.telefono === '' ? data.telefono : this.telefono;
          return pacienteDTO;
        },
      ))
  }

  actualizarPaciente() {
    this.buildPacienteDTO().subscribe({
      next: pacienteDTO => {
        this.pacienteService.editarPerfil(pacienteDTO, this.userService.getIdPaciente()).subscribe({
          next: data => {
            console.log(data)
            Utils.showAlertSuccess("Perfil actualizado con exito")
            this.router.navigate(['/paciente/info-paciente']);
          },
          error: error => {
            console.log(error);
            Utils.showAlertError("Ha habido algun error actualizando el perfil, mira la consola para mas informacion");
          }
        });
      },
      error: error => {
        console.log(error);
        Utils.showAlertError("B) Ha habido algun error actualizando el perfil, mira la consola para mas informacion)");
      }
    });
  }
}
