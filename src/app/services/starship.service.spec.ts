import { TestBed } from '@angular/core/testing';

import { StarshipService } from './starship.service';

describe('StarshipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarshipService = TestBed.get(StarshipService);
    expect(service).toBeTruthy();
  });
});
