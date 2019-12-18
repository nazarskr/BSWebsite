import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedWorks'
})
export class SelectedWorksPipe implements PipeTransform {

  transform(works: any): any[] {
    return works.filter(work => work.selected);
  }

}
