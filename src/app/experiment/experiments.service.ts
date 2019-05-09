import { Injectable } from '@angular/core';
import { Experiment } from '../domain/experiment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  constructor(private readonly http : HttpClient) { }

  getExperiments() {
    return this.http.get(`${CONFIG.API}/experiments/`);
  }
}
