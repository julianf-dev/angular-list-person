import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/persona.model';
import { PersonaServices } from 'src/app/services/persona.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent  implements OnInit{

  personas: Persona[] = []

  constructor(private personaServices: PersonaServices,
    private router:Router) {
  }

  //Se ejecuta despues de que se ha ejecutado el constructor. Ya que ya se ha inyectado el servcio

  ngOnInit(): void {
    this.personas = this.personaServices.personas;
  }

  addPerson(){
    this.router.navigate(['personas/agregar'])
  }

}
