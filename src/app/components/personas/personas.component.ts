import { Component, OnInit } from '@angular/core';
import { PersonaServices } from 'src/app/services/persona.services';
import { Persona } from 'src/app/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit{
  personas: Persona[] = []

  constructor(private personaServices: PersonaServices) {
  }

  //Se ejecuta despues de que se ha ejecutado el constructor. Ya que ya se ha inyectado el servcio

  ngOnInit(): void {
    this.personas = this.personaServices.personas;
  }
}
