import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadicheckboxesComponent } from './readicheckboxes.component';

describe('ReadicheckboxesComponent', () => {
  let component: ReadicheckboxesComponent;
  let fixture: ComponentFixture<ReadicheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadicheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadicheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
