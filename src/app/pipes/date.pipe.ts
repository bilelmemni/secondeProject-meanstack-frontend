import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datee'
})
export class DatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Date of publication : " + value ;
  }

}
