using Microsoft.AspNet.Mvc;
using MvcSample.Web.Models;

namespace MvcSample.Web
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(User());
        }

        public User User()
        {
            User user = new User()
            {
                Name = "My name",
                Address = "My address"
            };

            return user;
        }

      public User LoadUser()
      {
	return new User() 
	  {
	    FirstName = "Sebastian",
	      Name = "Gfeller",
	      Address = "My address"
	  };
      }

      [HttpPost]
      public JsonResult SaveUser(User model)
      {
	System.Console.WriteLine("First name is: " + model.FirstName);
        return Json("Response");
      }
    }
}