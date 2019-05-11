import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config';

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
}
