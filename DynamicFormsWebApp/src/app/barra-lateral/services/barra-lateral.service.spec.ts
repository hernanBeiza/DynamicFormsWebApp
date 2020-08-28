import { TestBed } from '@angular/core/testing';

import { BarraLateralService } from './barra-lateral.service';

describe('BarraLateralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarraLateralService = TestBed.get(BarraLateralService);
    expect(service).toBeTruthy();
  });
});
