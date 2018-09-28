import { TestBed } from '@angular/core/testing';

import { SPANavService } from './spa-nav.service';

describe('SPANavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SPANavService = TestBed.get(SPANavService);
    expect(service).toBeTruthy();
  });
});
