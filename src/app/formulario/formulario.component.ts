import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  /* Con el objecto EventEmmiter se propaga al padre */
  @Output() newPerson = new EventEmitter<Persona>();

  nameInput = '';
  lastNameInput ='';

  addPerson(){
    let person = new Persona(this.nameInput, this.lastNameInput);
    let personita = {
      firstName: this.nameInput,
      lastName: this.lastNameInput
    }
    this.newPerson.emit(person)
/*
    this.personas.push(person)
    this.people.push(personita)
    console.log(this.people) */
  }
}
