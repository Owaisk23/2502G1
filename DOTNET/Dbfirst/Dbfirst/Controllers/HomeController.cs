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

        public IActionResult EditProduct(int id)
        {
            var cow = db.Cows.FirstOrDefault(x => x.CowId == id);
            return View(cow);
        }


        [HttpPost]
        public IActionResult EditProduct(Cow cow)
        {
            db.Cows.Update(cow);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult DeleteProduct(int id)
        {
            var cow = db.Cows.FirstOrDefault(x => x.CowId == id);
            return View(cow);
        }


        [HttpPost]
        public IActionResult DeleteProduct(Cow cow)
        {
            db.Cows.Remove(cow);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult DetailProduct(int id)
        {
            var cow = db.Cows.FirstOrDefault(x => x.CowId == id);
            return View(cow);
        }


        public IActionResult Privacy()
        {
            return View();
        }

      
    }
}
