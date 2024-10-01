import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ListaMascotasComponent implements OnInit {
  mascotas: Observable<MascotaModel[]> | undefined;
  searchText: string = '';  // Agrega esta propiedad

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotas = this.mascotaService.obtenerMascotas();
  }

  borrarMascota(idMascota: string) {
    this.mascotaService.borrarMascota(idMascota).subscribe({
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
