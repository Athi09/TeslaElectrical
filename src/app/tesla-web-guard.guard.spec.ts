import { TestBed } from '@angular/core/testing';

import { TeslaWebGuardGuard } from './tesla-web-guard.guard';

describe('TeslaWebGuardGuard', () => {
  let guard: TeslaWebGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeslaWebGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
