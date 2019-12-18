import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOpacityComponent } from './title-opacity.component';

describe('TitleOpacityComponent', () => {
  let component: TitleOpacityComponent;
  let fixture: ComponentFixture<TitleOpacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleOpacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleOpacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
