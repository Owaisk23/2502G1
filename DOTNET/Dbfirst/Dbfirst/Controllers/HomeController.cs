using Dbfirst.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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

        [HttpPost]
        public IActionResult Index(string searchQuery)
        {
            // Retrieve products from the database
            var products = string.IsNullOrEmpty(searchQuery)
            ? db.Cows.ToList() // If no search, return all products
                : db.Cows
                    .Where(p => p.CowName.Contains(searchQuery) || p.CowDesc.Contains(searchQuery))
                    .ToList(); // Search logic

            ViewData["SearchQuery"] = searchQuery; // Pass search query back to view
            return View(products);
        }

        //public IActionResult AddProduct()
        //{
        //    return View();
        //}

        //[HttpPost]
        //public IActionResult AddProduct(Cow cow)
        //{
        //    db.Cows.Add(cow);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        public IActionResult Create()
        {
            ViewBag.CatId = new SelectList(db.Categories, "CatId", "CatName");


            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Cow item, IFormFile file)
        {
            var imageName = DateTime.Now.ToString("yymmddhhmmss");//24074455454454
            imageName += Path.GetFileName(file.FileName);//24074455454454apple.png

            string imagepath = Path.Combine(HttpContext.Request.PathBase.Value, "wwwroot/Uploads");
            var imagevalue = Path.Combine(imagepath, imageName);

            using (var stream = new FileStream(imagevalue, FileMode.Create))
            {

                file.CopyTo(stream);

            }

            var dbimage = Path.Combine("/Uploads", imageName);//   /uploads/240715343434apple.png
            item.CowImage = dbimage;

            db.Cows.Add(item);
            db.SaveChanges();


            ViewBag.CatId = new SelectList(db.Categories, "CatId", "CatName");
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
