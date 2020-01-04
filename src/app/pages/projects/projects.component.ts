import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/classes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  title = 'Проєкти';
  projects: Project[];
  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.projectsService.getProjects().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(projects => {
      this.projects = projects;
    });
  }
  onScrollElem(id) {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    const scrTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrY = rect.top + scrTop - 114;
    window.scrollTo({
      top: scrY,
      behavior: 'smooth'
    });
  }

}
