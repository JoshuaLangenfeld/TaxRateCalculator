using System;
using Angular_ASPNETCore_Seed.Models;

namespace Angular_ASPNETCore_Seed.Services
{
  public class CalculateService
  {
        private readonly ZipCodeLookup _zipCodeLookup;

    public CalculateService(ZipCodeLookup zipCodeLookup)
    {
      _zipCodeLookup = zipCodeLookup;
    }

        public Calculation Calculate(TaxCalculator calculator)
    {
      var state = _zipCodeLookup.GetState(calculator?.ZipCode);
      if (string.IsNullOrWhiteSpace(state))
        return GetCalculationInit(FormulaOption.None, "0");

      var annualIncome = GetIncome(calculator.Amount, calculator.Income);
      var tax = "6000";
      var option = FormulaOption.Fixed;

      if(state == "NY" || state == "CA" || state == "VA")
      {
        if (annualIncome <= 40000) {
          option = FormulaOption.Flat;
        }
        else
        {
          tax = CalculateProgressive(annualIncome).ToString();
          option = FormulaOption.Progressive;
        }
      }
      return GetCalculationInit(option, tax);
    }


    private int GetIncome(Amount amount, string income)
    {
      income = income?.Replace(",", "")?.Replace("$", "")?.Trim() ?? "0";
      int.TryParse(income, out var totalIncome);
      return GetAnnualIncome(amount, totalIncome);
    }

    private int GetAnnualIncome(Amount amount, int income)
    {
      switch(amount)
      {
        case Amount.Annually:
          return income;
          case Amount.Monthly:
          return income * 12;
          default:
          return income;
      }
    }

    private int CalculateProgressive(int income)
    {
      if (income < 86376)
       return GetTaxRate(income, .12);
      else if (income < 164926)
       return GetTaxRate(income, .22);
      else if (income < 209426)
       return GetTaxRate(income, .24);
      else if (income < 523601)
       return GetTaxRate(income, .35);
      else
       return GetTaxRate(income, .37);
    }

    private int GetTaxRate(int income, double rate) => Convert.ToInt32(income * rate);

    private Calculation GetCalculationInit(FormulaOption option, string amount)
    {
      return new Calculation()
      {
        FormulaOption = option,
        Result = amount
      };
    }
  }
}
