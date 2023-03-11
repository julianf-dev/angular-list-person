import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogginService } from './services/LoginServices.service';
import { PersonaServices } from './services/persona.services';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataService } from './services/Data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LogginService,
    PersonaServices,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
