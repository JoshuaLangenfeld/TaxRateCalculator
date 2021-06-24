
namespace Angular_ASPNETCore_Seed.Models
{
    public class Calculation
    {
    public FormulaOption FormulaOption { get; set;}
    public string Result { get; set; }
        }

    public enum FormulaOption
    {
      None,
 Progressive,
 Flat,
Fixed
    }
}
