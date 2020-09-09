import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowemailComponent } from './showemail.component';

describe('ShowemailComponent', () => {
  let component: ShowemailComponent;
  let fixture: ComponentFixture<ShowemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
