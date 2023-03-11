import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "src/app/persona.model";
import { DataService } from "./Data.service";
import { LogginService } from "./LoginServices.service";
import Swal from 'sweetalert2';


@Injectable()

export class PersonaServices {

  personas: Persona[] = []

  constructor(private loginServices: LogginService,
    private dataServices: DataService) {

    }

  saludar = new EventEmitter<number>();

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  getPersonas(){
    return this.dataServices.getPersons();
  }

  addPerson(persona: Persona) {
    if(this.personas === null){
      this.personas = []
    }
    this.loginServices.sendMessage(`Persona enviada loginService ${persona.nombre}`)
    this.personas.push(persona)
    console.log(this.personas)
    this.dataServices.create(this.personas)
  }

  foundPerson(index: number) {
    let person: Persona = this.personas[index];
    return person
  }

  editPerson(index: number, persona: Persona) {
    let editPersona = this.personas[index];
    editPersona.nombre = persona.nombre;
    editPersona.apellido = persona.apellido;
  }

  onDelete(index: number) {
    this.personas.splice(index, 1);
  }
};
