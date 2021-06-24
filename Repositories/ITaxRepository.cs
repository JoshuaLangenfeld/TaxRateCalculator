using Angular_ASPNETCore_Seed.Models;

namespace Angular_ASPNETCore_Seed.Repository
{
  public interface ITaxRepository
  {
    Calculation Calculator(TaxCalculator calculator);
  }
}
