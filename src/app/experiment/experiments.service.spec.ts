import { TestBed } from '@angular/core/testing';

import { ExperimentsService } from './experiments.service';

describe('ExperimentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperimentsService = TestBed.get(ExperimentsService);
    expect(service).toBeTruthy();
  });
});
