import { TestBed } from '@angular/core/testing';

import { ManageMahasiswaService } from './manage-mahasiswa.service';

describe('ManageMahasiswaService', () => {
  let service: ManageMahasiswaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageMahasiswaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
