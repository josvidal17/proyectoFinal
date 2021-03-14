import { CiclosInterfaz } from './../utils/Ciclos';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciclo'
})
export class CicloPipe implements PipeTransform {

  transform(ciclo:CiclosInterfaz, ...args: unknown[]): unknown {
    if(ciclo.curso==1){
      return ciclo.curso + " " + ciclo.nombre;
    }
    return ciclo.curso + " " + ciclo.nombre;;
  }

}
