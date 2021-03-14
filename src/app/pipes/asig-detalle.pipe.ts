import { AsignaturaInterfaz } from 'src/app/utils/Asignaturas';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asigDetalle'
})
export class AsigDetallePipe implements PipeTransform {

  transform(asig: AsignaturaInterfaz, ...args: unknown[]): unknown {
    return "Profesor: "+asig.profesor+"\nCiclo: "+asig.ciclo+"\nCurso: "+asig.curso;
  }

}
