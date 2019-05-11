import { Component, OnInit, Input } from '@angular/core';
import { Experiment } from 'src/app/domain/experiment';
import { ExperimentsService } from '../../experiments.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ExperimentConfig } from 'src/app/domain/experiment-config';
import { ExperimentRecord } from 'src/app/domain/experiment-record';

@Component({
  selector: 'app-experiment-detail',
  templateUrl: './experiment-detail.component.html',
  styleUrls: ['./experiment-detail.component.css']
})
export class ExperimentDetailComponent implements OnInit {

  experiment: Experiment;
  config: ExperimentConfig;
  experimentRecord: ExperimentRecord;

  constructor(private readonly expService: ExperimentsService,
              private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.getExperiment();
  }

  getExperiment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.expService.getSingleExperiment(id).subscribe(
      (data: Experiment) => {
        this.experiment = data;
      },
      (e: HttpErrorResponse) => {
        alert(e.error);
      }
    );
  }

  showConfig(): void {
  }

  showRecord(): void {
  }
}
