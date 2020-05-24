import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobseekerComponent } from './list-jobseeker.component';

describe('ListJobseekerComponent', () => {
  let component: ListJobseekerComponent;
  let fixture: ComponentFixture<ListJobseekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobseekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
