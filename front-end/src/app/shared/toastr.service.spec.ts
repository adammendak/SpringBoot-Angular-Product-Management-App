import { TestBed, inject } from '@angular/core/testing';

import { ToastrServiceProxy } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrServiceProxy]
    });
  });

  it('should be created', inject([ToastrServiceProxy], (service: ToastrServiceProxy) => {
    expect(service).toBeTruthy();
  }));
});
