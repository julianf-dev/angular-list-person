import { Component } from '@angular/core';
import { PersonaServices } from 'src/app/services/persona.services';
import { Persona } from '../../../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent {

  /* Con el objecto EventEmmiter se propaga al padre
  como usamos el servicio ya no necesitamos el output */
  /*   @Output() newPerson = new EventEmitter<Persona>(); */

  constructor(
    private personaServices: PersonaServices) {
      this.personaServices.saludar.subscribe(
        (indice: number) => alert(`el indice es ${indice}`)
      )
  }

  nameInput:string = '';
  lastNameInput:string = '';

  addPerson() {
    let person = new Persona(this.nameInput, this.lastNameInput);
    this.personaServices.addPerson(person)
    // this.newPerson.emit(person)
    /*
        this.personas.push(person)
        this.people.push(personita)
        console.log(this.people) */
  }


}
