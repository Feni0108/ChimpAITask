using ChimpAITask.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ChimpAITask.Models;
using Microsoft.EntityFrameworkCore;

namespace ChimpAITask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly DataContext _context;

        public AddressController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAddress()
        {
            var addresses = await _context.Address.ToListAsync();
            return Ok(addresses);
        }
    }
}
