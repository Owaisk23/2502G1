using FirstProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FirstProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            TempData["address"] = "North Nazimabad";
            TempData.Keep();
            return View();
        }
        
        public IActionResult About()
        {
            ViewData["name"] = "Owais Ahmed Khan";
            ViewData["designation"] = "Senior Manager Academics";
            ViewBag.city = "KArachi";
            return View();
        }

        public IActionResult Privacy()
        {
            TempData.Keep();
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
