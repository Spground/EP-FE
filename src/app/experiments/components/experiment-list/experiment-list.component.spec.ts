import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExperimentListComponent } from './experiment-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

describe('ExperimentListComponent', () => {
  let component: ExperimentListComponent;
  let fixture: ComponentFixture<ExperimentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentListComponent ],
      imports: [
        HttpClientTestingModule,
        NgZorroAntdModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
