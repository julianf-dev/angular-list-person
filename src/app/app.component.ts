import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { Person } from './interfaces/person.model';
import { LogginService } from './clases/LogginServices/LoginServices.service';
import { PersonaServices } from './clases/PersonasServices/persona.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Listado Persona';
  personas: Persona[] = []

  constructor(private loginServices: LogginService,
    private personaServices: PersonaServices) {

  }
  ngOnInit(): void {
    this.personas = this.personaServices.personas;
  }

}
