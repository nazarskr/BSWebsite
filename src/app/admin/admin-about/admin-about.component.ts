import { Component, OnInit } from '@angular/core';
import { About } from '../../shared/classes';
import { AboutService } from '../../shared/services/about.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {
  aboutArr: About[];
  about: About;
  bio: string;
  pressKitUrl: string;
  counter: number;
  constructor(private aboutService: AboutService) {
    this.getAbout();
  }

  ngOnInit() {
  }
  getAbout() {
    this.aboutService.getAbout()
    .subscribe(about => {
      this.about = about;
      this.bio = about.bio;
      this.pressKitUrl = about.pressKitUrl;
      this.counter = about.counter;
    });
  }
}
