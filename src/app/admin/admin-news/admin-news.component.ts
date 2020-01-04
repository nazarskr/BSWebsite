import { Component, OnInit } from '@angular/core';
import { News } from '../../shared/classes';
import { NewsService } from '../../shared/services/news.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {
  submitted = true;
  update = false;
  displayedColumns: string[] = [
    'number', 'title', 'imageUrl', 'city',
    'date', 'info', 'timePlaceEtc', 'moreInfoUrl',
    'tickets', 'edit', 'delete'
  ];
  news: News[];
  new: News = new News();
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
  newNew(): void {
    this.update = false;
    this.submitted = false;
    this.new = new News();
  }
  saveNew() {
    if
    (this.new.title
      && this.new.info
      && this.new.imageUrl
      && this.new.date
      && this.new.timePlaceEtc
      && this.new.moreInfoUrl
      && this.new.city) {
        this.newsService.createNews(this.new);
        this.new = new News();
        alert('Додано успішно!');
        this.submitted = true;
    } else {
      alert('Введи всі обов\'язкові дані!');
    }
  }
  onSubmit() {
    if (!this.update) {
      this.saveNew();
    }
  }
  editNew(neww) {
    this.submitted = false;
    this.update = true;
    this.new = {...neww};
  }
  updateNew() {
    this.newsService
      .updateNews(this.new.key, this.new)
      .catch(err => console.log(err));
    this.submitted = true;
  }
  deleteProject(neww) {
    this.newsService
      .deleteNews(neww.key)
      .catch(err => console.log(err));
  }
}
