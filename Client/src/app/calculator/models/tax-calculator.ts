import { Amount } from './amount-enum';

export interface ITaxCalculator {
  amount: Amount;
  zipCode: string;
  income: string;
}
