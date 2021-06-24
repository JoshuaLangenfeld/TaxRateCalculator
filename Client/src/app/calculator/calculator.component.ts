import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CalculatorService } from './calculator.service';
import { ICalculation } from './models/calculation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  amount: number = 0;
  amounts: string[] = ['Annual', 'Monthly'];
  income = new FormControl('', [Validators.required]);
  zipCode = new FormControl('', [Validators.required, Validators.minLength(5)]);

  result: string = '0';
  formula: string = 'None';
  private _isCalculating: boolean;
  private _subscription = new Subscription();

  get isDisabled(): boolean {
    if (this.zipCode.invalid || this.income.invalid) return true;

    if (this._isCalculating) return true;

    return false;
  }

  constructor(private _calculatorService: CalculatorService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  calculate() {
    this._isCalculating = true;
    const calculator = this._calculatorService.getTaxCalculator(
      this.amount,
      this.income.value,
      this.zipCode.value
    );
    this._subscription.add(
      this._calculatorService
        .calculate(calculator)
        .pipe(finalize(() => (this._isCalculating = false)))
        .subscribe((calculation: ICalculation) => {
          console.log(calculation);
          this.result = calculation?.result;
          this.formula = this._calculatorService.getFormulaName(
            calculation?.formulaOption
          );
        })
    );
  }
}
