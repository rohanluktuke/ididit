import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneAccomplishmentComponent } from './view-one-accomplishment.component';

describe('ViewOneAccomplishmentComponent', () => {
  let component: ViewOneAccomplishmentComponent;
  let fixture: ComponentFixture<ViewOneAccomplishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOneAccomplishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneAccomplishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
