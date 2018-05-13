import { TestBed, inject } from '@angular/core/testing';

import { StepNavigationService } from './step-navigation.service';

describe('StepNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepNavigationService]
    });
  });

  it('should be created', inject([StepNavigationService], (service: StepNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
