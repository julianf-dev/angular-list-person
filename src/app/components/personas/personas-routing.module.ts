import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas.component';

const routes: Routes = [
  {
    path: '', component: PersonasComponent,
    children: [
      {
        path: 'agregar',
        component: FormularioComponent
      },
      {
        path: ':id',
        component: FormularioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
