import { pipe } from "rxjs";

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})

export class wrapPipe implements PipeTransform {
  // transform(value: any, ...args: any[]): any {
    transform(value: string, limit = 25, completeWords = false, dots = '...') {
      if (completeWords) {
        limit = value.substr(0, limit).lastIndexOf(' ');
      }
      return value.length > limit ? value.substr(0, limit) + dots : value;
    }

  }
// }
