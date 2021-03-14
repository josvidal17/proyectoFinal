
import { CiclosService } from './../../services/ciclos.service';
import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosInterfaz } from './../../utils/Ciclos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaInterfaz } from 'src/app/utils/Asignaturas';

@Component({
  selector: 'app-detalle-ciclos',
  templateUrl: './detalle-ciclos.component.html',
  styleUrls: ['./detalle-ciclos.component.css']
})
export class DetalleCiclosComponent implements OnInit {

  cicloDetalle:string = ""; 
  cursoDetalle:number = 0;
  listaCiclo:CiclosInterfaz[] = [];
  listaAsignaturas:AsignaturaInterfaz[] = [];
  listaConocimiento:string[] = [];
  constructor(private rutaActiva:ActivatedRoute,private sercicioAsignatura:AsignaturasService,private servicioCiclo:CiclosService) { }

  ngOnInit(): void {
    this.cicloDetalle = this.rutaActiva.snapshot.params.ciclo;
    this.cursoDetalle = this.rutaActiva.snapshot.params.curso;
    this.listaCiclo = this.servicioCiclo.getTodosCiclos();
    this.listaAsignaturas = this.sercicioAsignatura.getListaAsignaturaCiclo(this.cicloDetalle,this.cursoDetalle); 
    this.listaAsignaturas.forEach(item=>{
      item.conocimientos.forEach(cono=>{
        this.listaConocimiento.push(cono.nombre);
      })
    }) 
  }

}
