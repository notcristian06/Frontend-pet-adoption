import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptanteModel } from './adoptante.model';


@Injectable({
  providedIn: 'root'
})
export class AdoptanteService {

  BASE_URL='http://127.0.0.1:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de adoptantes
  obtenerAdoptantes(){
    return this.http.get<AdoptanteModel[]>(`${this.BASE_URL}/adoptantes/buscar`);
  }

  //Buscar un Adoptante por ID
  obtenerAdoptante(idAdoptante:string){
    return this.http.get<AdoptanteModel>(`${this.BASE_URL}/adoptantes/buscarId/${idAdoptante}`);
  }

  //Crear un Adoptante
  agregarAdoptante(adoptante: AdoptanteModel){
    return this.http.post<string>(`${this.BASE_URL}/adoptantes/crear`,adoptante);
  }

  //Actualizar un Adoptante
  actualizarAdoptante(adoptante: AdoptanteModel){
    return this.http.put<string>(`${this.BASE_URL}/adoptantes/actualizar/${adoptante.id}`,adoptante);
  }

  //ELiminar un Adoptante
  borrarAdoptante(idAdoptante: string){
    return this.http.delete<string>(`${this.BASE_URL}/adoptantes/borrar/${idAdoptante}`);
  }

  
}
