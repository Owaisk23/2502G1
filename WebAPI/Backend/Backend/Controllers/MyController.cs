using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MyController : Controller
    {
        private readonly BikeContext db;
        public MyController(BikeContext _db)
        {
            db = _db;
        }


        //[HttpGet]
        //public IActionResult Index()
        //{
        //    return Ok("OWAIS AHMED KHAN");
        //}

        [HttpGet]
        public IActionResult GetBikes()
        {
            return Ok(db.Bikes.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetBikes(int id)
        {
            return Ok(db.Bikes.Find(id));
        }

        [HttpPost]
        public IActionResult AddBikes(Bike bike)
        {
            db.Bikes.Add(bike);
            db.SaveChanges();
            return StatusCode(201);
        }
        
        [HttpDelete]
        public IActionResult DeleteBike(int id)
        {
            var bike = db.Bikes.Find(id);
            db.Bikes.Remove(bike);
            db.SaveChanges();
            return StatusCode(201);
        }

    }
}
