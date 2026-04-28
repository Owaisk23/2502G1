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

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string email, string pwd)
        {
            if(email == "admin@gmail.com" && pwd == "aptech")
            {
                return RedirectToAction("Privacy");
            }


            //TempData["address"] = "North Nazimabad";
            //TempData.Keep();
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
