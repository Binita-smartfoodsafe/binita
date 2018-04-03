import { TestBed, inject } from '@angular/core/testing';

import { UploaddataService } from './uploaddata.service';

describe('UploaddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploaddataService]
    });
  });

  it('should be created', inject([UploaddataService], (service: UploaddataService) => {
    expect(service).toBeTruthy();
  }));
});
