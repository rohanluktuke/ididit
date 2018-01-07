import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAccomplishmentsComponent } from './enter-accomplishments.component';

describe('EnterAccomplishmentsComponent', () => {
  let component: EnterAccomplishmentsComponent;
  let fixture: ComponentFixture<EnterAccomplishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAccomplishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
