import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ExperimentsService } from '../../experiments.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Experiment } from 'src/app/domain/experiment';

@Component({
  selector: 'app-experiment-list',
  templateUrl: './experiment-list.component.html',
  styleUrls: ['./experiment-list.component.css']
})
export class ExperimentListComponent implements OnInit {

  listOfExperiments: Experiment[];
  data: Experiment[];

  sortName: string | null = null;
  sortValue: string | null = null;

  // 分页
  pageIndex = 1;
  total = 0;
  pageSize = 20;

  constructor(private readonly experimentsService: ExperimentsService) { }

  ngOnInit() {
    this.getExperiments();
  }

  getExperiments() {
    this.experimentsService.getExperiments(this.pageIndex, this.pageSize).subscribe(
      (data: {results: Experiment[], count: number}) => {
        this.data = data.results;
        this.total = data.count;
        this.listOfExperiments = this.data;
      },
      (e: HttpErrorResponse) => {
        console.log(e);
      }
    );
  }

  sort(sort: {key: string; value: string}): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    if (this.sortName && this.sortValue) {
      this.listOfExperiments = this.data.sort((a, b) => {
        if (this.sortValue === 'ascend') {
          return a[this.sortName] > b[this.sortName] ? 1 : -1;
        } else {
          return b[this.sortName] > a[this.sortName] ? 1 : -1;
        }
      });
    } else {
      this.listOfExperiments = this.data;
    }
  }

  onPageIndexChange(): void {
    this.getExperiments();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.getExperiments();
  }
}
