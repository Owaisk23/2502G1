using Dbfirst.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Dbfirst.Controllers
{
    public class HomeController : Controller
    {
        private readonly CowContext db;

        public HomeController(CowContext _db) { 
            db = _db;
        }

        public IActionResult Index()
        {
            return View(db.Cows.ToList());
        }

        public IActionResult AddProduct()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddProduct(Cow cow)
        {
            db.Cows.Add(cow);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

      
    }
}
