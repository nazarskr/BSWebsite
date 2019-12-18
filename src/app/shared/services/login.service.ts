import { Injectable } from '@angular/core';
import { Login } from '../classes';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private dbPath = '/login';
  loginDoc: AngularFirestoreDocument<Login> = null;
  constructor(private firestore: AngularFirestore) {
    this.loginDoc = firestore.collection(this.dbPath).doc('kzAiQJcXBa93uk9kCAMD');
  }
  getLogin(): Observable<Login> {
    return this.loginDoc.valueChanges();
  }
}
