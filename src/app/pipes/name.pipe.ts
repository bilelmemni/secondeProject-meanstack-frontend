import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Name : " + value ;
  }

}
