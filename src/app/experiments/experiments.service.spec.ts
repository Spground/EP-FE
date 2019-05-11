import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExperimentsService } from './experiments.service';

describe('ExperimentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ExperimentsService = TestBed.get(ExperimentsService);
    expect(service).toBeTruthy();
  });
});
