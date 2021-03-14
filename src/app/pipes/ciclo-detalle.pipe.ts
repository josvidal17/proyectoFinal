import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cicloDetalle'
})
export class CicloDetallePipe implements PipeTransform {

  transform(ciclo: string, ...curso: number[]): unknown {
    if(curso[0]==1){
      return ciclo + " " + curso[0];
    }
    return ciclo + " " + curso[0];
  }

}
