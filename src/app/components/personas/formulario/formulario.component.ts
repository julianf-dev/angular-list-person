import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private personaServices: PersonaServices,
    private router: Router,
    private route: ActivatedRoute) {
      this.personaServices.saludar.subscribe(
        (indice: number) => alert(`el indice es ${indice}`)
      )
  }

  nameInput:string = '';
  lastNameInput:string = '';
  index: number;
  isEdit:boolean = false

  ngOnInit(){
    this.index = this.route.snapshot.params['id']
    if(this.index){
      let person:Persona = this.personaServices.foundPerson(this.index);
      this.nameInput = person.nombre;
      this.lastNameInput = person.apellido
      this.isEdit = true;
    }
  }
  addPerson() {
    let person = new Persona(this.nameInput, this.lastNameInput);
    if(this.index){
      this.personaServices.editPerson(this.index, person)
    }else{
      this.personaServices.addPerson(person)
      this.nameInput = ''
      this.lastNameInput = ''
    }
    this.router.navigate(['personas'])
    /*
        this.personas.push(person)
        this.people.push(personita)
        console.log(this.people) */
  }

  onDeletePerson(){
    if(this.index != null){
      this.personaServices.onDelete(this.index)
    }
    this.router.navigate(['personas'])

  }



}
