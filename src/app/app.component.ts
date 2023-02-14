import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaServices } from './services/persona.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Listado Persona';
  personas: Persona[] = []

  constructor(private personaServices: PersonaServices) {
  }

  //Se ejecuta despues de que se ha ejecutado el constructor. Ya que ya se ha inyectado el servcio

  ngOnInit(): void {
    this.personas = this.personaServices.personas;
  }

}
