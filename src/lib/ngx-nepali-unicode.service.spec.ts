import { TestBed } from '@angular/core/testing';

import { NgxNepaliUnicodeService } from './ngx-nepali-unicode.service';

describe('NgxNepaliUnicodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNepaliUnicodeService = TestBed.get(NgxNepaliUnicodeService);
    expect(service).toBeTruthy();
  });
});
