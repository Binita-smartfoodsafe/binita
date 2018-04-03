import { TestBed, inject } from '@angular/core/testing';

import { RecordKeepingService } from './record-keeping.service';

describe('RecordKeepingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordKeepingService]
    });
  });

  it('should be created', inject([RecordKeepingService], (service: RecordKeepingService) => {
    expect(service).toBeTruthy();
  }));
});
