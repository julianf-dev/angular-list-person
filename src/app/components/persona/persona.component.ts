import { Component, Input } from '@angular/core';
import { PersonaServices } from 'src/app/clases/PersonasServices/persona.services';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {


  @Input() persona: Persona;
  @Input() indice: number;
  @Input() firstName: string;

  constructor(private personaService: PersonaServices){

  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.indice)
  }
}
