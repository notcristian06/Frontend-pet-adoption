import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrl: './lista-solicitudes.component.css'
})
export class ListaSolicitudesComponent implements OnInit{
  solicitudes: Observable<SolicitudModel[]> | undefined;
  searchText: string = ''; // Agrega esta propiedad
  constructor(private solicitudService: SolicitudService){}
  ngOnInit() {
    this.solicitudes=this.solicitudService.obtenerSolicitudes();
  }

  borrarSolicitud(idSolicitud:string){
    this.solicitudService.borrarSolicitud(idSolicitud).subscribe({
      next: data=>{
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err=>{
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}

