import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../core/core.module';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CoreModule],
      providers: [CalculatorService],
    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
