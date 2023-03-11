import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../persona.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private API_URI = 'https://listado-personas-4404b-default-rtdb.firebaseio.com'

  // Save personas
  create(personas: Persona[]) {
    //no se usa post porque envia una nueva coleccion
    return this.http.put<Persona>(`${this.API_URI}/datos.json`, personas)
      .subscribe({
        next: response => console.log('Respuesta existosa',response),
        error: (error:string) => {
          console.log('este es el error', error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong!`,
          })
        }
      })
  }

  getPersons() {
    return this.http.get<Persona[]>(`${this.API_URI}/datos.json`)
  }
}
