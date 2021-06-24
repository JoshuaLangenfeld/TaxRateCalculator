import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataService } from '../core/services/data.service';
import { Amount } from './models/amount-enum';
import { ICalculation } from './models/calculation';
import { FormulaOption } from './models/formula-option-enum';
import { ITaxCalculator } from './models/tax-calculator';

@Injectable()
export class CalculatorService {
  private readonly _url = '/api/tax/calculator';

  constructor(private _http: HttpClient, private _dataService: DataService) {}

  calculate(taxCalculator: ITaxCalculator): Observable<ICalculation> {
    return this._http
      .post<ICalculation>(`${this._url}`, taxCalculator)
      .pipe(catchError(this._dataService.handleError));
  }

  getTaxCalculator(
    amount: Amount,
    income: string,
    zipCode: string
  ): ITaxCalculator {
    return {
      amount,
      income,
      zipCode,
    } as ITaxCalculator;
  }

  getFormulaName(formulaOption: FormulaOption): string {
    switch (formulaOption) {
      case FormulaOption.Fixed:
        return 'Fixed Rate';
      case FormulaOption.Flat:
        return 'Flat Rate';
      case FormulaOption.Progressive:
        return 'Progressive Rate';
      default:
        return 'None';
    }
  }
}
