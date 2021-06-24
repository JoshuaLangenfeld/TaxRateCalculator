
namespace Angular_ASPNETCore_Seed.Models
{
    public class TaxCalculator
    {
      public Amount Amount { get; set;}
      public string ZipCode { get; set; }
      public string Income { get; set; }
  }

  public enum Amount
  {
    Annually,
    Monthly
  }
}
