import { DetalleCiclosComponent } from './components/detalle-ciclos/detalle-ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"ciclos",component:CiclosComponent},
  {path:"asingaturas",component:AsignaturasComponent},
  {path:"detalleCiclo/:ciclo/:curso",component:DetalleCiclosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
