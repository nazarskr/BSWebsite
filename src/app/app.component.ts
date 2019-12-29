import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AboutService } from './shared/services/about.service';
import { About } from './shared/classes';
import { CdkStepperNext } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BohdanSehin';
  about: About;
  counter: number;
  constructor(private router: Router,
              private aboutService: AboutService) {
                this.getCounter();
              }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }
  getCounter() {
    this.aboutService.getAbout()
    .subscribe(about => {
      this.about = about;
      this.counter = about.counter;
    },
    err => {
      console.error(err);
    });
    setTimeout(() => {
      this.updateCounter();
    }, 2000);

  }
  updateCounter() {
    this.counter++;
    this.about.counter = this.counter;
    this.aboutService.updateAbout(this.about);
  }
}
