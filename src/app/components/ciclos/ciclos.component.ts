import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosInterfaz } from './../../utils/Ciclos';
import { CiclosService } from './../../services/ciclos.service';
import { Component, OnInit } from '@angular/core';
import { AsignaturaInterfaz } from 'src/app/utils/Asignaturas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  listaCiclos:CiclosInterfaz[] = [];
  listaDam:AsignaturaInterfaz[] = [];
  listaDaw:AsignaturaInterfaz[] = [];

  constructor(private ciclosServicio:CiclosService,
              private asignaturaServicio:AsignaturasService,
              private ruta:Router) { }

  ngOnInit(): void {
    this.listaCiclos = this.ciclosServicio.getTodosCiclos();
    this.listaDam = this.asignaturaServicio.getListaFiltradaAsignatura("dam");
    this.listaDaw = this.asignaturaServicio.getListaFiltradaAsignatura("daw");  
  }

  cargarDetalle(ciclo:CiclosInterfaz){ 
    this.ruta.navigate(["detalleCiclo",ciclo.nombre,ciclo.curso]);
  }
}
