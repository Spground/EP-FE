import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config';
import { Experiment } from '../domain/experiment';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {
  constructor(private readonly http: HttpClient) { }

  getExperiments(pageIndex: number) {
    return this.http.get(`${CONFIG.API}/experiments/?page=${pageIndex}`);
  }

  getSingleExperiment(expId: number) {
    return this.http.get(`${CONFIG.API}/experiments/${expId}`);
  }

  getSingleConfig(configId: number) {
    return this.http.get(`${CONFIG.API}/configs/${configId}`);
  }

  getAllConfigs(exp: Experiment) {
    return this.http.get(`${CONFIG.API}/configs/?experiment=${exp.id}`);
  }

  getSingleExperimentRecord(erId: number) {
    return this.http.get(`${CONFIG.API}/experiment_records/${erId}`);
  }

  getAllExperimentRecords(exp: Experiment) {
    return this.http.get(`${CONFIG.API}/experiment_records/?experiment=${exp.id}`);
  }

  getSingleModel(modelId: number) {
    return this.http.get(`${CONFIG.API}/models/${modelId}`);
  }
}
