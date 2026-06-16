using Microsoft.AspNetCore.Mvc;

namespace TemplateEmbeding.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
