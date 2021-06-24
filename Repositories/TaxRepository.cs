using Angular_ASPNETCore_Seed.Models;
using Angular_ASPNETCore_Seed.Services;

namespace Angular_ASPNETCore_Seed.Repository
{
  public class TaxRepository : ITaxRepository
  {
    private readonly CalculateService _calculateService;

    public TaxRepository(CalculateService calculateService)
    {
      _calculateService = calculateService;
    }

    public Calculation Calculator(TaxCalculator calculator) => _calculateService.Calculate(calculator);
  }
}
