import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasModule } from './components/personas/personas.module';
import { LogginService } from './services/LoginServices.service';
import { PersonaServices } from './services/persona.services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PersonasModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LogginService,
    PersonaServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
