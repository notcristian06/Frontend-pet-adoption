import { Component, OnInit } from '@angular/core';
import { AdoptanteModel } from '../shared/adoptante.model';
import { AdoptanteService } from '../shared/adoptante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-adoptantes',
  templateUrl: './editar-adoptantes.component.html',
  styleUrl: './editar-adoptantes.component.css'
})
export class EditarAdoptantesComponent implements OnInit{

  idAdoptante= '';
  adoptante = new AdoptanteModel(
    '',  // Convertir a number (aunque aquí la cadena vacía será NaN)
    '',          // nombre
    '',          // apellido
    '',          // email
    '',  // telefono
    '',          // identificacion
    '',          // dirección
    ''           // ciudad
  );
  
  constructor(private adoptanteService: AdoptanteService,private route: ActivatedRoute,private router: Router){
  }

  ngOnInit(){
    this.idAdoptante=this.route.snapshot.params['idAdoptante'];
    console.log(`El idAdoptante es ${this.idAdoptante}`);

     if(this.idAdoptante){
      //Viene de Editar
      console.log('La solicitud viene de Editar');
      this.adoptanteService.obtenerAdoptante(this.idAdoptante).subscribe({
        next: data=>{
          console.log(data);
          this.adoptante=data;
          console.log(this.adoptante);
        },
        error: err=>{
          console.log(`Error ${err}`);
        }

      });

     }
     else{
      console.log('La solicitud viene de Nueva Adoptante');
     }

  }

  onSubmit(){
    console.log("On Submit");
    //Viene de Editar
    if(this.adoptante.id){
      this.adoptanteService.actualizarAdoptante(this.adoptante).subscribe({
        next: data=>{
          console.log(data);
          this.router.navigate(['/adoptantes']);

        },
        error: err=>{
          console.log(`Error al actualizar ${err}`);
        }
      });
    }
    else{
      //Viene de Nueva Adoptante
      this.adoptanteService.agregarAdoptante(this.adoptante).subscribe({
        next: data=>{
          console.log(data);
          this.router.navigate(['/adoptantes']);
        },
        error: err=>{
          console.log(`Error al Agregar ${err}`);
        }
      });
    }

  }
}
