import { AsignaturasService } from './../../services/asignaturas.service';
import { AsignaturaInterfaz } from 'src/app/utils/Asignaturas';
import { Component, OnInit } from '@angular/core';
import { CiclosService } from 'src/app/services/ciclos.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  cantAsig:number = 0;
  listaAsignaturas:AsignaturaInterfaz[] = []; 
  
  constructor(private servicioAsignatura:AsignaturasService,private servicioCiclos:CiclosService) { }

  ngOnInit(): void {
    this.listaAsignaturas = this.servicioAsignatura.getTodasListaAsignatura();
    this.cantAsig = this.listaAsignaturas.length;
  }

  filtrarAsignaturas(asign:string,ciclo:string,conoci:string){
    if(asign.length==0 && ciclo.length==0 && conoci.length==0){
      this.listaAsignaturas = this.servicioAsignatura.getTodasListaAsignatura(); 
      this.cantAsig = this.servicioAsignatura.getTodasListaAsignatura().length; 
    }else{
      this.listaAsignaturas = this.servicioAsignatura.getFiltroTodasAsignatura(asign,ciclo,conoci);
      this.cantAsig = this.listaAsignaturas.length;
    }
  }
}
