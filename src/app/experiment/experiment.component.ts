import { Component, OnInit } from '@angular/core';
import { Experiment } from '../domain/experiment';
import { ExperimentsService } from './experiments.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  experiments: Experiment[];

  constructor(private readonly experimentsService : ExperimentsService) { }

  ngOnInit() {
    this.getExperiments();
  }

  getExperiments() {
    this.experimentsService.getExperiments().subscribe(
      data => {
        this.experiments = data['results'];
      },
      (e : HttpErrorResponse) => {
        console.log(e);
      } 
    );
  }

}
