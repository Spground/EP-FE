import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentListComponent } from './components/experiment-list/experiment-list.component';
import { ExperimentDetailComponent } from './components/experiment-detail/experiment-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ExperimentListComponent
  },
  {
    path: 'detail/:id',
    component: ExperimentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentsRoutingModule { }
