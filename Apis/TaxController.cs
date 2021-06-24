using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular_ASPNETCore_Seed.Models;
using Angular_ASPNETCore_Seed.Repository;

namespace Angular_ASPNETCore_Seed.Apis
{
    [Route("api/tax")]
    public class TaxController : Controller
    {
    private readonly ITaxRepository _repo;

    public TaxController(ITaxRepository repo)
       {
      _repo = repo;
    }

            [HttpGet]
        [ProducesResponseType(typeof(Message), 200)]
        public async Task<ActionResult> Messages()
        {
            //Simulate async process
            return await Task.Run(() =>
            {
                var msg = new Message { Data = "Get Tax Information Now!" };
                return Ok(msg);
            });
        }

        [HttpPost("calculator")]
        [ProducesResponseType(typeof(Calculation), 200)]
        public async Task<ActionResult> Calculator([FromBody] TaxCalculator calculator)
        {
            //Simulate async process
            return await Task.Run(() =>
            {
                var msg = _repo.Calculator(calculator);
                return Ok(msg);
            });
        }
    }
}
