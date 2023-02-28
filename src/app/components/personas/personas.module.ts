import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    PersonasComponent,
    PersonaComponent,
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
  ]
})
export class PersonasModule { }
