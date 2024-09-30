import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  BASE_URL = 'http://127.0.0.1:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de Solicitudes
  obtenerSolicitudes() {
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitudes/buscar`);
  }

  //Buscar una Solicitud por ID
  obtenerSolicitud(idSolicitud: string) {
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitudes/buscarId/${idSolicitud}`);
  }

  //Crear una Solicitud
  agregarSolicitud(solicitud: SolicitudModel) {
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crear`, solicitud);
  }

  //Actualizar una Solicitud
  actualizarSolicitud(solicitud: SolicitudModel) {
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizar/${solicitud.id}`, solicitud);
  }

  //ELiminar una Solicitud
  borrarSolicitud(idSolicitud: string) {
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/borrar/${idSolicitud}`);
  }

}
