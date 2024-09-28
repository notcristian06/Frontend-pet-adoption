import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';

const routes: Routes = [
 {path: 'mascotas', component: ListaMascotasComponent},
 {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
 {path: 'mascotas/agregar',component: EditarMascotasComponent},
 {path: '**',redirectTo: '/mascotas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
