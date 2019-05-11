import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentDetailComponent } from './experiment-detail.component';
import { NzCardModule, NzTabsModule } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExperimentDetailComponent', () => {
  let component: ExperimentDetailComponent;
  let fixture: ComponentFixture<ExperimentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentDetailComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NzCardModule,
        NzTabsModule
      ]
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
