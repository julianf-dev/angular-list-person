import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  { path: 'about',
  loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'personas', loadChildren: () => import('./components/personas/personas.module').then(m => m.PersonasModule) },
  { path: 'not-found',
    component: NotFoundComponent },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
