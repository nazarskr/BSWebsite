import { Component, OnInit } from '@angular/core';
import { Piece } from '../../shared/classes';
import { WorksService } from '../../shared/services/works.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-works',
  templateUrl: './admin-works.component.html',
  styleUrls: ['./admin-works.component.scss']
})
export class AdminWorksComponent implements OnInit {
  piece: Piece = new Piece();
  displayedColumns: string[] = [
    'position', 'title', 'instr', 'texts',
    'order', 'duration', 'year', 'chapter',
    'audio', 'video', 'pdf',
    'selected', 'edit', 'delete'
  ];
  chapters = [
    'solo', 'chamber(2-4)', 'ensemble(5+)',
    'orchestra', 'choir', 'voice/choir & ensemble/orchestra',
    'electronics', 'theatre/stage'
  ];
  works: Piece[];
  submitted = true;
  update = false;
  constructor(private worksService: WorksService) {
    this.getWorks();
  }

  ngOnInit() {
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
  newPiece(): void {
    this.update = false;
    this.submitted = false;
    this.piece = new Piece();
  }
  savePiece() {
    if
    (this.piece.title
      && this.piece.duration
      && this.piece.instr
      && this.piece.chapter
      && this.piece.year) {
        this.worksService.createPiece(this.piece);
        this.piece = new Piece();
        alert('Додано успішно!');
        this.submitted = true;
    } else if (!this.piece.chapter) {
      alert('Вибери розділ!');
    } else {
      alert('Введи всі дані!');
    }
  }
  onSubmit() {
    if (!this.update) {
      this.savePiece();
    }
  }
  editPiece(piece) {
    this.submitted = false;
    this.update = true;
    this.piece = {...piece};
    console.log(this.piece);
  }
  updatePiece() {
    this.worksService
      .updatePiece(this.piece.key, this.piece)
      .catch(err => console.log(err));
    this.submitted = true;
  }
  deletePiece(piece) {
    this.worksService
      .deletePiece(piece.key)
      .catch(err => console.log(err));
  }
}

