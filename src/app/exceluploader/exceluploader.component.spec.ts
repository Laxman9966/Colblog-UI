import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceluploaderComponent } from './exceluploader.component';

describe('ExceluploaderComponent', () => {
  let component: ExceluploaderComponent;
  let fixture: ComponentFixture<ExceluploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceluploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceluploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
