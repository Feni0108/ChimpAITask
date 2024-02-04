using Microsoft.AspNetCore.Mvc;

namespace ChimpAITask.Models;

public class AddressController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}