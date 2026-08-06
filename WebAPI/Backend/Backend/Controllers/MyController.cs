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
    }
}
