import { Component, OnInit, Input } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-title-opacity',
  templateUrl: './title-opacity.component.html',
  styleUrls: ['./title-opacity.component.scss']
})
export class TitleOpacityComponent implements OnInit {
  @Input() title: string;
  titleOpacity = 1;
  constructor(private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
  }
  scrollingEvents() {
    this.scrollDispatcher.scrolled().subscribe(() =>  {
      if (window.scrollY === 0) {
        this.titleOpacity = 1;
      } else {
        this.titleOpacity = 1 / (window.scrollY / 100);
      }
    });
  }

}
