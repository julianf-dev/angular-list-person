import { Component } from '@angular/core';
import { LogginService } from 'src/app/clases/LogginServices/LoginServices.service';
import { PersonaServices } from 'src/app/clases/PersonasServices/persona.services';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent {

  /* Con el objecto EventEmmiter se propaga al padre */
  /*   @Output() newPerson = new EventEmitter<Persona>(); */

  constructor(private logginService: LogginService,
    private personaServices: PersonaServices) {
  }

  /* nameInput = ''; */
  lastNameInput = '';

  addPerson(nameInput: HTMLInputElement) {
    let person = new Persona(nameInput.value, this.lastNameInput);
    this.personaServices.addPerson(person)
    // this.newPerson.emit(person)
    /*
        this.personas.push(person)
        this.people.push(personita)
        console.log(this.people) */
  }


}
