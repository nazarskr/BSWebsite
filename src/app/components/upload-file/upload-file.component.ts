import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input() fileAccept: string;
  @Input() filePath: string;
  @Output() fileUrl: EventEmitter<string> = new EventEmitter();
  files: File[] = [];
  uploadFile: any;
  fileName: string;
  ref: any;
  newFileUrl: any;
  uploadProgress$: Observable<number>;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
    this.files.forEach(file => {
      this.fileName = file.name;
      this.uploadFile = file;
    });
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  onReset() {
    this.files.splice(0, this.files.length);
  }
  upload() {
    if (this.fileName) {
      const task = this.afStorage.upload(`${this.filePath}${this.fileName}`, this.uploadFile);
      this.uploadProgress$ = task.percentageChanges();
      this.afStorage.upload(`${this.filePath}${this.fileName}`, this.uploadFile).then(() => {
        const storage = firebase.storage();
        const pathReference = storage.ref(`${this.filePath}${this.fileName}`);
        pathReference.getDownloadURL().then((url) => {
          this.fileUrl.emit(url);
          document.getElementById('progress').style.display = 'none';
        }).catch((error) => {
          console.log(error);
        });
      });
      this.onReset();
    }
  }
}
