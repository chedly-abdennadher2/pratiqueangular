import { TestBed } from '@angular/core/testing';

import { StudentServiceService } from './studentservice';

describe('StudentServiceService', () => {
  let service: StudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
