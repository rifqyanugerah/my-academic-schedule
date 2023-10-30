import { TestBed } from '@angular/core/testing';

import { ManageDosenService } from './manage-dosen.service';

describe('ManageDosenService', () => {
  let service: ManageDosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
