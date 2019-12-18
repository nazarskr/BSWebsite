import { Injectable } from '@angular/core';
import { Piece } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private dbPath = '/works';
  worksRef: AngularFirestoreCollection<Piece> = null;
  constructor(private firestore: AngularFirestore) {
    this.worksRef = firestore.collection(this.dbPath, ref => ref.orderBy('year', 'desc'));
  }
  getWorks(): AngularFirestoreCollection<Piece> {
    return this.worksRef;
  }
  createPiece(piece: Piece): void {
    this.worksRef.add({...piece});
  }
  updatePiece(key: string, value: any): Promise<void> {
    return this.worksRef.doc(key)
    .update(value);
  }
  deletePiece(key: string): Promise<void> {
    return this.worksRef.doc(key).delete();
  }
}
