import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideosComponent } from './admin-videos.component';

describe('AdminVideosComponent', () => {
  let component: AdminVideosComponent;
  let fixture: ComponentFixture<AdminVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
