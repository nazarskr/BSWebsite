import { Component, OnInit } from '@angular/core';
import { About } from '../../shared/classes';
import { AboutService } from '../../shared/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'Біо';
  about: About;
  constructor(private aboutService: AboutService) {
    this.getAbout();
  }

  ngOnInit() {
  }
  getAbout() {
    this.aboutService.getAbout()
    .subscribe(about => {
      this.about = about;
    });
  }
}
