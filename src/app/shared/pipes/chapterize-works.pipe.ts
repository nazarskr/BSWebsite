import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chapterizeWorks'
})
export class ChapterizeWorksPipe implements PipeTransform {

  transform(works: any, chapter: string): any[] {
    if (!chapter) {
      return null;
    }
    return works.filter(work => work.chapter === chapter);
  }

}
