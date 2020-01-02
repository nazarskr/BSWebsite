import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chapterizeProjects'
})
export class ChapterizeProjectsPipe implements PipeTransform {

  transform(projects: any, regular: boolean): any[] {
    if (regular === undefined) {
      return null;
    }
    return projects.filter(project => project.regular === regular);
  }

}
