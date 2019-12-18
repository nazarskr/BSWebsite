import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparent',
  templateUrl: './transparent.component.html',
  styleUrls: ['./transparent.component.scss']
})
export class TransparentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollUp() {
    const elem = document.getElementById('bufferTransparent');
    elem.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
}
