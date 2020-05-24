import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployerComponent } from './addemployer.component';

describe('AddemployerComponent', () => {
  let component: AddemployerComponent;
  let fixture: ComponentFixture<AddemployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
