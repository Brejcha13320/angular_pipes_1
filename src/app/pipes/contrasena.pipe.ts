import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {

    if(activar){
      let cambio = "";
      for( let i = 0 ; i < value.length ; i++){
        cambio += "*";
      }
      return cambio;
    } else {
      return value;
    }
  }

}
