import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return  "description : " + value ;
  }

}
