import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { News } from '../../shared/classes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title = 'Події';
  news: News[];
  constructor(private newsService: NewsService) { }

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

}
