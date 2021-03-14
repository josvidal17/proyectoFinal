import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetalleCiclosComponent } from './components/detalle-ciclos/detalle-ciclos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CicloPipe } from './pipes/ciclo.pipe';
import { CicloDetallePipe } from './pipes/ciclo-detalle.pipe';
import { AsigDetallePipe } from './pipes/asig-detalle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    AsignaturasComponent,
    DetalleCiclosComponent,
    NavbarComponent,
    CicloPipe,
    CicloDetallePipe,
    AsigDetallePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
