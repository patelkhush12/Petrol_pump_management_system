import { TestBed } from '@angular/core/testing';

import { MapiService } from './mapi.service';

describe('MapiService', () => {
  let service: MapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
