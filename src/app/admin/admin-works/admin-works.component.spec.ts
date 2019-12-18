import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorksComponent } from './admin-works.component';

describe('AdminWorksComponent', () => {
  let component: AdminWorksComponent;
  let fixture: ComponentFixture<AdminWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
