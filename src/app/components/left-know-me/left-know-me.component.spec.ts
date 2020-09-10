import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftKnowMeComponent } from './left-know-me.component';

describe('LeftKnowMeComponent', () => {
  let component: LeftKnowMeComponent;
  let fixture: ComponentFixture<LeftKnowMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftKnowMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftKnowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
