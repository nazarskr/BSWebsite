import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
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
  elem: any;
  bufferElem: any;
  works: Piece[];
  youtubeUrl = 'https://www.youtube.com/watch?v=x2MMuHg7D7w';
  constructor(private embedService: EmbedVideoService,
              private worksService: WorksService) {
    this.elem = this.embedService.embed(this.youtubeUrl, {
      attr: { width: 640, height: 480 }
    });
    this.getWorks();
  }

  ngOnInit() {
    document.getElementById('vvv').innerHTML = this.elem.changingThisBreaksApplicationSecurity;
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
