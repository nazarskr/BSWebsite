import { Component, OnInit } from '@angular/core';
import { About } from '../../shared/classes';
import { AboutService } from '../../shared/services/about.service';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {
  fileAccept = '.zip, .rar';
  filePath = 'aboutFiles/';
  oldPressKitUrl: string;
  aboutArr: About[];
  about: About;
  counter: number;
  constructor(private aboutService: AboutService,
              private afStorage: AngularFireStorage) {
  }

  ngOnInit() {
    this.getAbout();
  }
  getAbout() {
    this.aboutService.getAbout()
    .subscribe(about => {
      this.about = about;
    });
  }
  updateAbout() {
    this.aboutService
      .updateAbout(this.about)
      .catch(err => console.log(err));
    alert('Успішно оновлено!');
  }
  getUrl(data) {
    this.oldPressKitUrl = this.about.pressKitUrl;
    this.about.pressKitUrl = data;
    this.aboutService
      .updateAbout(this.about)
      .catch(err => console.log(err));
    if (this.oldPressKitUrl) {
      this.afStorage.storage.refFromURL(this.oldPressKitUrl).delete();
    }
    alert('Завантажено!');
  }
}
