import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "src/app/persona.model";
import { LogginService } from "./LoginServices.service";

@Injectable()

export class PersonaServices {

  constructor(private loginServices: LogginService){}

  saludar = new EventEmitter<number>();

  personas: Persona[] =
  [
    new Persona('Julian','Perez'),
    new Persona('Alejandra','Franco')
  ];

  addPerson(persona: Persona){
    this.personas.push(persona);
    this.loginServices.sendMessage(`Persona enviada ${persona.nombre}`)
  }
};
