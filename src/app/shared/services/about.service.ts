import { Injectable } from '@angular/core';
import { About } from '../classes';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private dbPath = '/about';
  aboutDoc: AngularFirestoreDocument<About> = null;
  constructor(private firestore: AngularFirestore) {
    this.aboutDoc = firestore.collection(this.dbPath).doc('pjQe4ZzucJ7UxZmYkPjS');
  }
  getAbout(): Observable<About> {
    return this.aboutDoc.valueChanges();
  }
  updateAbout(value: any): Promise<void> {
    return this.aboutDoc.update(value);
  }
}
