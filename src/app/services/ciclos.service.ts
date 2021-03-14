import { CiclosInterfaz } from './../utils/Ciclos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  listaCiclos:CiclosInterfaz[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ]
  constructor() { }

  getTodosCiclos():CiclosInterfaz[]{
    return this.listaCiclos;
  }
}
