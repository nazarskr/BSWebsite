import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'Admin';
  constructor() { }

  ngOnInit() {
  }
  onScrollElem(id) {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    const scrTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrY = rect.top + scrTop - 114;
    window.scrollTo({
      top: scrY,
      behavior: 'smooth'
    });
  }
}
