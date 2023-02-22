import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/personas/persona/persona.component';
import { FormularioComponent } from './components/personas/formulario/formulario.component';
import { LogginService } from './services/LoginServices.service';
import { PersonaServices } from './services/persona.services';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './components/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LogginService,
    PersonaServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
