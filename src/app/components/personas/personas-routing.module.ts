import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PersonasComponent,
  children: [
    { path: 'agregar', component: FormularioComponent },
    { path: ':id', component: FormularioComponent }
  ] },
  {
    path:'**',
    redirectTo:''
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
