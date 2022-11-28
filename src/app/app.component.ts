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


  nameInput = '';
  lastNameInput ='';

  addPerson(){
    let person = new Persona(this.nameInput, this.lastNameInput);
    let personita = {
      firstName: this.nameInput,
      lastName: this.lastNameInput
    }

    this.personas.push(person)
    this.people.push(personita)
    console.log(this.people)
  }
}
