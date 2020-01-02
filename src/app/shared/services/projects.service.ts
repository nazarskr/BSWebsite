import { Injectable } from '@angular/core';
import { Project } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private dbPath = '/projects';
  projectsRef: AngularFirestoreCollection<Project> = null;
  constructor(private firestore: AngularFirestore) {
    this.projectsRef = firestore.collection(this.dbPath, ref => ref.orderBy('dateFrom', 'desc'));
  }
  getProjects(): AngularFirestoreCollection<Project> {
    return this.projectsRef;
  }
  createProject(project: Project): void {
    this.projectsRef.add({...project});
  }
  updateProject(key: string, value: any): Promise<void> {
    return this.projectsRef.doc(key)
    .update(value);
  }
  deleteProject(key: string): Promise<void> {
    return this.projectsRef.doc(key).delete();
  }
}
