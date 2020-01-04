import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/classes';
import { ProjectsService } from '../../shared/services/projects.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {
  submitted = true;
  update = false;
  displayedColumns: string[] = [
    'number', 'title', 'imageUrl', 'position',
    'dateFrom', 'dateTo', 'info', 'websiteUrl',
    'links', 'edit', 'delete'
  ];
  projects: Project[];
  project: Project = new Project();
  constructor(private projectsService: ProjectsService) {
    this.getProjects();
  }

  ngOnInit() {
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
  newProject(): void {
    this.update = false;
    this.submitted = false;
    this.project = new Project();
  }
  saveProject() {
    if
    (this.project.title
      && this.project.info
      && this.project.imageUrl
      && this.project.dateFrom
      && this.project.position
      && this.project.regular) {
        this.projectsService.createProject(this.project);
        this.project = new Project();
        alert('Додано успішно!');
        this.submitted = true;
    } else {
      alert('Введи всі обов\'язкові дані!');
    }
  }
  onSubmit() {
    if (!this.update) {
      this.saveProject();
    }
  }
  editProject(project) {
    this.submitted = false;
    this.update = true;
    this.project = {...project};
  }
  updateProject() {
    this.projectsService
      .updateProject(this.project.key, this.project)
      .catch(err => console.log(err));
    this.submitted = true;
  }
  deleteProject(project) {
    this.projectsService
      .deleteProject(project.key)
      .catch(err => console.log(err));
  }

}
