import { TestBed } from '@angular/core/testing';
import { StateService } from './states.service';

describe('StatesService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


// states.service.spec.ts

