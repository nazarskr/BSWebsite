import { Injectable } from '@angular/core';
import { News } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private dbPath = '/news';
  newsRef: AngularFirestoreCollection<News> = null;
  constructor(private firestore: AngularFirestore) {
    this.newsRef = firestore.collection(this.dbPath, ref => ref.orderBy('date', 'desc'));
  }
  getNews(): AngularFirestoreCollection<News> {
    return this.newsRef;
  }
  createNews(news: News): void {
    this.newsRef.add({...news});
  }
  updateNews(key: string, value: any): Promise<void> {
    return this.newsRef.doc(key)
    .update(value);
  }
  deleteNews(key: string): Promise<void> {
    return this.newsRef.doc(key).delete();
  }
}
