import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitudes.component.html',
  styleUrl: './editar-solicitudes.component.css'
})
export class EditarSolicitudesComponent implements OnInit{

  idSolicitud= '';
  solicitud = new SolicitudModel(
    '',  // Convertir a number (aunque aquí la cadena vacía será NaN)
    '',          // id mascota
    '',          // id adoptante
    '',          // fecha de solicitud
    '',  // estado
    '',          // nombre mascota
    '',          // nombre adoptante
    ''           // comentarios
  );
  
  constructor(private solicitudService: SolicitudService,private route: ActivatedRoute,private router: Router){
  }

  ngOnInit(){
    this.idSolicitud=this.route.snapshot.params['idSolicitud'];
    console.log(`El idSolicitud es ${this.idSolicitud}`);

     if(this.idSolicitud){
      //Viene de Editar
      console.log('La solicitud viene de Editar');
      this.solicitudService.obtenerSolicitud(this.idSolicitud).subscribe({
        next: data=>{
          console.log(data);
          this.solicitud=data;
          console.log(this.solicitud);
        },
        error: err=>{
          console.log(`Error ${err}`);
        }

      });

     }
     else{
      console.log('La solicitud viene de Nueva Solicitud');
     }

  }

  onSubmit(){
    console.log("On Submit");
    //Viene de Editar
    if(this.solicitud.id){
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe({
        next: data=>{
          console.log(data);
          this.router.navigate(['/solicitudes']);

        },
        error: err=>{
          console.log(`Error al actualizar ${err}`);
        }
      });
    }
    else{
      //Viene de Nueva Solicitud
      this.solicitudService.agregarSolicitud(this.solicitud).subscribe({
        next: data=>{
          console.log(data);
          this.router.navigate(['/solicitudes']);
        },
        error: err=>{
          console.log(`Error al Agregar ${err}`);
        }
      });
    }

  }
}
