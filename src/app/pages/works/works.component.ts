import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../shared/services/works.service';
import { Piece } from '../../shared/classes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  title = 'Твори';
  works: Piece[];
  constructor(private worksService: WorksService) {
  }

  ngOnInit() {
    this.getWorks();
  }
  getWorks() {
    this.worksService.getWorks().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(works => {
      this.works = works;
    });
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
