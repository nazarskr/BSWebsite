import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { News } from '../../shared/classes';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: News[];
  constructor(private newsService: NewsService,
              public router: Router) { }

  ngOnInit() {
    this.getNews();
  }
  getNews() {
    this.newsService.getNews().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(news => {
      this.news = news;
    });
  }
  navToNews() {
    this.router.navigate(['news']);
    const el = document.getElementsByClassName('navLink')[1];
    el.classList.add('navActive');
  }
}
