import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentDetailComponent } from './experiment-detail.component';
import { NzCardModule, NzTabsModule } from 'ng-zorro-antd';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PipsModule } from 'src/app/pips/pips.module';
import { NgxJsonViewModule } from 'ng-json-view';

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
        NzTabsModule,
        PipsModule,
        NgxJsonViewModule
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
