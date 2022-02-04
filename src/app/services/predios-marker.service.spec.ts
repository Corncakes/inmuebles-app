import { TestBed } from '@angular/core/testing';

import { PrediosMarkerService } from './predios-marker.service';

describe('PrediosMarkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrediosMarkerService = TestBed.get(PrediosMarkerService);
    expect(service).toBeTruthy();
  });
});
