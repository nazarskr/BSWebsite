import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  files: File[] = [];
  uploadImage: any;
  imageName: string;
  ref: any;
  newImageUrl: any;
  uploadProgress$: Observable<number>;
  imageUrl: string;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  upload() {
    if (this.imageName) {
     const task = this.afStorage.upload(`blogImages/${this.imageName}`, this.uploadImage);
     this.uploadProgress$ = task.percentageChanges();
     this.afStorage.upload(`blogImages/${this.imageName}`, this.uploadImage).then(() => {
        const storage = firebase.storage();
        const pathReference = storage.ref(`blogImages/${this.imageName}`);
        pathReference.getDownloadURL().then((url) => {
          this.imageUrl = url;
          document.getElementById('progress').style.display = 'none';
        }).catch((error) => {
          console.log(error);
        });
      });
    }
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.files.forEach(file => {
      this.imageName = file.name;
      this.uploadImage = file;
    });
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
