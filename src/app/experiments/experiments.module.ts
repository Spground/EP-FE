import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentComponent } from './experiments.component';
import { ExperimentsRoutingModule } from './experiments-routing.module';
import { ExperimentListComponent } from './components/experiment-list/experiment-list.component';
import {  NgZorroAntdModule } from 'ng-zorro-antd';
import { ExperimentDetailComponent } from './components/experiment-detail/experiment-detail.component';
import { NgxJsonViewModule } from 'ng-json-view';
import { PipsModule } from '../pips/pips.module';

@NgModule({
  declarations: [ExperimentComponent, ExperimentListComponent, ExperimentDetailComponent],
  imports: [
    CommonModule,
    ExperimentsRoutingModule,
    NgZorroAntdModule,
    NgxJsonViewModule,
    PipsModule.forRoot()
  ],
})
export class ExperimentsModule { }
