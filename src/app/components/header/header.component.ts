import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('scrollButton', [
      state('static', style({
        opacity: 0,
      })),
      state('scroll', style({
        opacity: 1,
        zIndex: 2
      })),
      transition('static => scroll',
        animate(2000)),
      transition('scroll => static',
        animate(100)),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isBigScroll = false;
  constructor(private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
    this.removeActive();
  }
  closeMenu() {
    const toggler = document.getElementById('menuToggle') as HTMLInputElement;
    toggler.checked = false;
  }
  fixedScroll() {
    this.scrollDispatcher.scrolled().subscribe(x =>  {
      // console.log(window.scrollY);
      if (window.scrollY > 1000) {
        this.isBigScroll = true;
      } else {
        this.isBigScroll = false;
      }
    });
  }
  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  removeActive() {
    if (document.getElementsByClassName('navActive')[0]) {
      const prev = document.getElementsByClassName('navActive')[0];
      prev.classList.remove('navActive');
    }
  }
  setActive(event: MouseEvent): void {
    this.removeActive();
    const el = event.target as HTMLElement;
    el.classList.add('navActive');
  }
}
