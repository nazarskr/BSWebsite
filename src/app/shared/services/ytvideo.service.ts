import { Injectable } from '@angular/core';
import { YtVideo } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class YtvideoService {
  private dbPath = '/youtube-videos';
  ytVideoRef: AngularFirestoreCollection<YtVideo> = null;
  constructor(private firestore: AngularFirestore) {
    this.ytVideoRef = firestore.collection(this.dbPath, ref => ref.orderBy('year', 'desc'));
  }
  getVideos(): AngularFirestoreCollection<YtVideo> {
    return this.ytVideoRef;
  }
  createVideo(video: YtVideo): void {
    this.ytVideoRef.add({...video});
  }
  updateVideo(key: string, value: any): Promise<void> {
    return this.ytVideoRef.doc(key)
    .update(value);
  }
  deleteVideo(key: string): Promise<void> {
    return this.ytVideoRef.doc(key).delete();
  }
}
