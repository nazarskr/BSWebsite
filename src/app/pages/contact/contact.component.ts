import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutService } from '../../shared/services/about.service';
import { About } from '../../shared/classes';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  title = 'Контакт';
  about: About;
  counter: number;
  constructor(private aboutService: AboutService) {
    this.getCounter();
  }

  ngOnInit() {
  }
  getCounter() {
    this.aboutService.getAbout()
    .subscribe(about => {
      this.about = about;
      this.counter = about.counter;
    });
  }
  updateCounter() {
    this.counter++;
    this.about.counter = this.counter;
    this.aboutService.updateAbout(this.about);
    console.log(this.counter);
  }
  ngOnDestroy() {
    this.updateCounter();
  }
}
