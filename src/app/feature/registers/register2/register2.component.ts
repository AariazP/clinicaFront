import {Component, OnInit} from '@angular/core';
import {DataRegisterService} from 'src/app/core/services/DataRegister.service';
import {Utils} from 'src/app/core/utils/utils';
import {PacienteDTO} from "../../../core/dto/paciente/PacienteDTO";
import {Router} from "@angular/router";
import {ClinicaService} from "../../../core/services/clinica.service";
import {ImagenService} from "../../../core/services/imagen.service";
import {AuthService} from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-register2',
    templateUrl: './register2.component.html',
    styleUrls: ['./register2.component.css'],
})
export class Register2Component implements OnInit {
    inputValue: ''; // Variable para guardar el valor del input de alergias
    listaAlergias: string[] = []; // Aquí se guardan las alergias cada que se da enter en el input.
    listaCiudades: string[] = []; // Lista de ciudades que se van a mostrar en el html
    listaTipoSangre: string[] = [];
    listaEPS: string[] = []; // Lista de EPS que se van a mostrar en el html

    //Choicebox variables
    box_ciudad: '';
    box_tipoSangre: '';
    box_eps: '';

    imageFileList: FileList;
    pacienteDTO: PacienteDTO;
    imageIsLoaded: boolean = false;
    router: Router

    ngOnInit(): void {
        this.cargarCiudades();
        this.cargarEPS();
        this.cargarTiposSangre();
        console.log(this.listaCiudades)
        console.log(this.listaEPS)
        console.log(this.listaTipoSangre)
    }


    constructor(router: Router,
                private sharedData: DataRegisterService,
                private clinicaService: ClinicaService,
                private imagenService: ImagenService,
                private authService: AuthService,
    ) {
        this.pacienteDTO = this.sharedData.getState();
        this.router = router;
    }

    agregarAlergiaOnEnter() {
        console.log(this.inputValue);
        this.listaAlergias.push(this.inputValue);
        this.inputValue = '';
    }

    onFileChange(event: any): void {
        if (event.target.files.length > 0) {
            const files = event.target.files;
            console.log(files);
            this.imageIsLoaded = true;
            this.imageFileList = files;
        }
    }

    registrar() {
        if (this.validacionesOK()) {
            Utils.showAlertError(
                'Tienes campos sin llenar, por favor verifica que todos los campos esten llenos  (excepto posiblemente alergias).'
            );
        } else {

            this.setDTOS(); //Setea los DTOs de la view
            const formData = new FormData();
            formData.append('file', this.imageFileList[0]);
            this.imagenService.subir(formData).subscribe({
                next: data => {
                    this.pacienteDTO.urlFotoPersonal = data.respuesta.url;
                },
                error: error => {
                    Utils.showAlertError("Debe subir una imagen");
                }
            });

            if (this.enviarPeticionDeRegistro()) {
                this.router.navigate(['/']);
            }
        }
    }


    enviarPeticionDeRegistro() : boolean  {
        this.authService.registrarPaciente(this.pacienteDTO).subscribe({
            error: error => {
                Utils.showAlertError(error)
                return false
            },
            next: data => {
                Utils.showAlertError(data.respuesta);
            }
        });
        return true;
    }

    cargarCiudades() {
        this.clinicaService.listarCiudades().subscribe({
            next: data => {
                this.listaCiudades = data.respuesta;
                console.log(data)
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

    cargarTiposSangre() {
        this.clinicaService.listarTipoSangre().subscribe({
            next: data => {
                this.listaTipoSangre = data.respuesta;
                console.log(data)
            },
            error: error => {
                console.log(error);
            }
        });
    }


  validacionesOK(): boolean {
    return (
        this.box_ciudad === '' ||
        this.box_tipoSangre === '' ||
        this.box_eps === '' ||
        this.imageFileList === null ||
        this.imageFileList.length === 0
    );
  }



  private setDTOS() {
        this.pacienteDTO.alergias = this.listaAlergias.join(', ');
        this.pacienteDTO.ciudadResidencia = this.box_ciudad;
        this.pacienteDTO.tipoSangre = this.box_tipoSangre;
        this.pacienteDTO.eps = this.box_eps;
    }
}
