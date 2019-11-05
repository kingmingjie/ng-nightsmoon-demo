import { TestBed } from '@angular/core/testing';

import { NgNightsmoonDemoService } from './ng-nightsmoon-demo.service';

describe('NgNightsmoonDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgNightsmoonDemoService = TestBed.get(NgNightsmoonDemoService);
    expect(service).toBeTruthy();
  });
});
