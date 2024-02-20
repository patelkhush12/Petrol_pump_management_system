import { TestBed } from '@angular/core/testing';

import { CapiService } from './capi.service';

describe('CapiService', () => {
  let service: CapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
