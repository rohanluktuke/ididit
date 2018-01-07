import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccomplishmentsComponent } from './view-accomplishments.component';

describe('ViewAccomplishmentsComponent', () => {
  let component: ViewAccomplishmentsComponent;
  let fixture: ComponentFixture<ViewAccomplishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccomplishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
