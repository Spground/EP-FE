import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentDetailComponent } from './experiment-detail.component';

describe('ExperimentDetailComponent', () => {
  let component: ExperimentDetailComponent;
  let fixture: ComponentFixture<ExperimentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
