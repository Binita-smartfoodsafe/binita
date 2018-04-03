import { TestBed, inject } from '@angular/core/testing';

import { RawMaterialsService } from './raw-materials.service';

describe('RawMaterialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RawMaterialsService]
    });
  });

  it('should be created', inject([RawMaterialsService], (service: RawMaterialsService) => {
    expect(service).toBeTruthy();
  }));
});
