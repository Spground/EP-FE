import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonParsePipe'
})
export class JsonParsePipePipe implements PipeTransform {

  transform(value: string, args?: any): object {
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }
}
