import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonasComponent,
    FormularioComponent,
    PersonaComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
