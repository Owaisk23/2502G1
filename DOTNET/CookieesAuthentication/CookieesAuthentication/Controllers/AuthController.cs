using CookieesAuthentication.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CookieesAuthentication.Controllers
{
    public class AuthController : Controller
    {
        private readonly UserContext db;
        public AuthController(UserContext _db)
        {
            db = _db;
        }
        public IActionResult Signup()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Signup(User user)
        {
            var checkUser = db.Users.FirstOrDefault(a => a.Email == user.Email);
            if (checkUser == null)
            {
                var hasher = new PasswordHasher<string>();
                string hashPassword = hasher.HashPassword(user.Email, user.Password);

                user.Password = hashPassword;
                db.Users.Add(user);
                db.SaveChanges();
                return RedirectToAction("Login");

            }
            else
            {
                ViewBag.msg = "User Already registered. Please Login.";
                return View();
            }
        }

    }
}
