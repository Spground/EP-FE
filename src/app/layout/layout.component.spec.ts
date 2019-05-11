import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule, NzIconModule } from 'ng-zorro-antd';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        NgZorroAntdModule,
        NzIconModule
      ],
      declarations: [ LayoutComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
