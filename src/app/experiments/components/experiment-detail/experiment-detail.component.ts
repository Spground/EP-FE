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
  configs: ExperimentConfig[];
  experimentRecords: ExperimentRecord[];

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
    if (this.experiment) {
      this.expService.getAllConfigs(this.experiment).subscribe(
        (data: {count: number; results: ExperimentConfig[]}) => {
        this.configs = data.results;
      },
      (e: HttpErrorResponse) => {
        alert(e.statusText);
      }
      );
    }
  }

  showRecord(): void {
    if (this.experiment) {
      this.expService.getAllExperimentRecords(this.experiment).subscribe(
        (data: {count: number; results: ExperimentRecord[]}) => {
        this.experimentRecords = data.results;
        if (this.experimentRecords) {
          this.experimentRecords.forEach(e => {
            const config = this.configs ? this.configs.find(c => c.id === e.config) : null;
            if (config) {
              e.configObj = config;
            } else {// :( we get it from server.
              this.expService.getSingleConfig(e.config).subscribe(
                (experimentConfig: ExperimentConfig) => {
                  e.configObj = experimentConfig;
                  console.log(e.configObj);
                },
                (error: HttpErrorResponse) => {
                  alert(error.statusText);
                }
              );
            }
          });
        }
      },
      (e: HttpErrorResponse) => {
        alert(e.statusText);
      }
      );
    }
  }
}
