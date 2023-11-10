import { Component } from '@angular/core';
import { AlergiaComponent } from '../../brick/alergia/alergia.component';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {

  
  inputValue : ''; // Variable para guardar el valor del input de alergias
  listaAlergias : string[] = [] // Aquí se guardan las alergias cada que se da enter en el input.
  listaCiudades : string [] = [] // Lista de ciudades que se van a mostrar en el html
  listaTipoSangre : string[] = []
  listaEPS : string [] = [] // Lista de EPS que se van a mostrar en el html
  
  //Choicebox variables
  box_ciudad: '';
  box_tipoSangre : '';
  box_eps : '';

  
  constructor() {
    this.cargarCiudades();
    this.cargarEPS();
    this.cargarTiposSangre();
   }

   
   
   agregarAlergiaOnEnter() {
     console.log(this.inputValue);
     this.listaAlergias.push(this.inputValue)
     this.inputValue = '';
  } 
  
  onFileChange(event : any){
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }
  
  
  cargarCiudades() {
    this.listaCiudades.push("Bogota");
    this.listaCiudades.push("Medellin");
    this.listaCiudades.push("Cali");
    this.listaCiudades.push("Barranquilla");
    this.listaCiudades.push("Cartagena");
    this.listaCiudades.push("Bucaramanga");
    this.listaCiudades.push("Pereira");
    this.listaCiudades.push("Santa Marta");
    this.listaCiudades.push("Manizales");
    this.listaCiudades.push("Cucuta");
    this.listaCiudades.push("Armenia");
    this.listaCiudades.push("Villavicencio");
    this.listaCiudades.push("Valledupar");
    this.listaCiudades.push("Ibague");
    this.listaCiudades.push("Pasto");
  }

  
  cargarEPS() {
    this.listaEPS.push("Sura");
    this.listaEPS.push("Sanitas");
    this.listaEPS.push("Coomeva");
    this.listaEPS.push("Compensar");
    this.listaEPS.push("Salud Total");
    this.listaEPS.push("Famisanar");
    this.listaEPS.push("Nueva EPS");
    this.listaEPS.push("Medimas");
    this.listaEPS.push("Savia Salud");
    this.listaEPS.push("Aliansalud");
    this.listaEPS.push("Cafesalud");
    this.listaEPS.push("Cruz Blanca");
    this.listaEPS.push("Colsubsidio");
    this.listaEPS.push("Salud Vida");
  }
  
  cargarTiposSangre() {
    this.listaTipoSangre.push("A+");
    this.listaTipoSangre.push("A-");
    this.listaTipoSangre.push("B+");
    this.listaTipoSangre.push("B-");
    this.listaTipoSangre.push("O+");
    this.listaTipoSangre.push("O-");
    this.listaTipoSangre.push("AB+");
    this.listaTipoSangre.push("AB-");
  }
  
}
