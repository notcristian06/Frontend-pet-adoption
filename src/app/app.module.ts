import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaAdoptantesComponent } from './lista-adoptantes/lista-adoptantes.component';
import { EditarAdoptantesComponent } from './editar-adoptantes/editar-adoptantes.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { AdoptanteService } from './shared/adoptante.service';
import { SolicitudService } from './shared/solicitud.service';
import { InicioPaginaComponent } from './inicio-pagina/inicio-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    EditarMascotasComponent,
    ListaAdoptantesComponent,
    EditarAdoptantesComponent,
    ListaSolicitudesComponent,
    EditarSolicitudesComponent,
    InicioPaginaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MascotaService,
    AdoptanteService,
    SolicitudService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
