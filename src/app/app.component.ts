import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { Person } from './interfaces/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Listado Persona';
  people: Person[]  = []

  personas: Persona[] =
    [
      new Persona('Julian','Perez'),
      new Persona('Alejandra','Franco')
    ];

    addPerson(persona: Persona){
      this.personas.push(persona);
    }


}
