import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdoptanteModel } from '../shared/adoptante.model';
import { AdoptanteService } from '../shared/adoptante.service';

@Component({
  selector: 'app-lista-adoptantes',
  templateUrl: './lista-adoptantes.component.html',
  styleUrls: ['./lista-adoptantes.component.css'] // Cambia "styleUrl" por "styleUrls"
})
export class ListaAdoptantesComponent implements OnInit {
  adoptantes: Observable<AdoptanteModel[]> | undefined; // Mantener el nombre como 'adoptantes'
  searchText: string = ''; // Agrega esta propiedad

  constructor(private adoptanteService: AdoptanteService) {}

  ngOnInit() {
    this.adoptantes = this.adoptanteService.obtenerAdoptantes();
  }

  borrarAdoptante(idAdoptante: string) {
    this.adoptanteService.borrarAdoptante(idAdoptante).subscribe({
      next: data => {
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err => {
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
