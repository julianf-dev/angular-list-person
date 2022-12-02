import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LogginService } from './clases/LogginServices/LoginServices.service';
import { PersonaServices } from './clases/PersonasServices/persona.services';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LogginService,
    PersonaServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
