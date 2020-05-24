import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticdashboardComponent } from './analyticdashboard.component';

describe('AnalyticdashboardComponent', () => {
  let component: AnalyticdashboardComponent;
  let fixture: ComponentFixture<AnalyticdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
