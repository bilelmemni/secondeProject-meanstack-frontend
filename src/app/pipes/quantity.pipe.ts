import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return " my quantity is : " + value ;
  }

}
